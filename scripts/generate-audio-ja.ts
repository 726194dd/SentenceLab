import { createServer, type Server } from "node:http";
import { readFile, writeFile, mkdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { loadAllSentences } from "../src/data/loadSentences.ts";
import type { JaLevel } from "../src/types.ts";
import { assertFfmpegAvailable, wavToOpus } from "./wav-to-opus.ts";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const PORT = 9876;
const VOICE = "jf_alpha";
const SPEED = 0.9;

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".wasm": "application/wasm",
  ".onnx": "application/octet-stream",
  ".bin": "application/octet-stream",
  ".tar": "application/octet-stream",
  ".htsvoice": "application/octet-stream",
  ".wav": "audio/wav",
};

function safePath(urlPath: string): string | null {
  const decoded = decodeURIComponent(urlPath.split("?")[0] ?? "/");
  const normalized = path.normalize(decoded).replace(/^(\.\.(\/|\\|$))+/, "");
  const filePath = path.join(ROOT, normalized);
  if (!filePath.startsWith(ROOT)) return null;
  return filePath;
}

async function startServer(): Promise<Server> {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        const url = req.url ?? "/";
        const filePath = safePath(url === "/" ? "/scripts/audio-gen.html" : url);
        if (!filePath) {
          res.writeHead(403);
          res.end("Forbidden");
          return;
        }
        const data = await readFile(filePath);
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { "Content-Type": MIME[ext] ?? "application/octet-stream" });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });
    server.listen(PORT, "127.0.0.1", () => resolve(server));
  });
}

async function fileReady(filePath: string): Promise<boolean> {
  try {
    return (await stat(filePath)).size > 256;
  } catch {
    return false;
  }
}

declare global {
  interface Window {
    ready?: boolean;
    speakToBytes?: (text: string, voice: string, speed: number) => Promise<number[]>;
  }
}

export async function generateJapanese(
  limit = Infinity,
  levels?: JaLevel[],
): Promise<void> {
  await assertFfmpegAvailable();

  const outDir = path.join(ROOT, "public", "audio", "ja");
  await mkdir(outDir, { recursive: true });
  let sentences = await loadAllSentences("ja");
  if (levels?.length) {
    const allowed = new Set(levels);
    sentences = sentences.filter((sentence) => allowed.has(sentence.level as JaLevel));
  }

  const server = await startServer();
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  page.on("console", (msg) => console.log(`[page] ${msg.text()}`));
  page.on("pageerror", (error) => console.error("[pageerror]", error.message));

  try {
    await page.goto(`http://127.0.0.1:${PORT}/scripts/audio-gen.html`, {
      waitUntil: "domcontentloaded",
      timeout: 120_000,
    });
    await page.waitForFunction(() => window.ready === true, undefined, { timeout: 900_000 });
    console.log("Kokoro fp32 engine ready.\n");

    let done = 0;
    let skipped = 0;

    for (const sentence of sentences) {
      if (done + skipped >= limit) break;
      const out = path.join(outDir, `${sentence.id}.opus`);
      if (await fileReady(out)) {
        skipped += 1;
        continue;
      }

      const tempWav = path.join(outDir, `${sentence.id}.wav.tmp`);
      const started = Date.now();
      process.stdout.write(`[ja] ${sentence.id} … `);
      try {
        const bytes = await page.evaluate(
          async ({ text, voice, speed }) => {
            if (!window.speakToBytes) throw new Error("speakToBytes missing");
            return window.speakToBytes(text, voice, speed);
          },
          { text: sentence.en, voice: VOICE, speed: SPEED },
        );
        await writeFile(tempWav, Buffer.from(bytes));
        await wavToOpus(tempWav, out);
        await unlink(tempWav).catch(() => {});
        done += 1;
        const size = (await stat(out)).size;
        console.log(
          `ok (${((Date.now() - started) / 1000).toFixed(1)}s, ${(size / 1024).toFixed(0)} KB)`,
        );
      } catch (error) {
        await unlink(tempWav).catch(() => {});
        console.log(`FAIL: ${error instanceof Error ? error.message : error}`);
      }
    }

    console.log(`ja: generated ${done}, skipped ${skipped}`);
  } finally {
    await browser.close();
    server.close();
  }
}

if (process.argv[1]?.includes("generate-audio-ja")) {
  const limitArg = process.argv.indexOf("--limit");
  const limit = limitArg >= 0 ? Number(process.argv[limitArg + 1]) : Infinity;
  const levelsArg = process.argv.indexOf("--ja-levels");
  const levels =
    levelsArg >= 0
      ? process.argv[levelsArg + 1].split(",").map((level) => level.trim().toUpperCase() as JaLevel)
      : undefined;
  generateJapanese(limit, levels).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
