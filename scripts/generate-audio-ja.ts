import { createServer, type Server } from "node:http";
import { createServer as createNetServer } from "node:net";
import { createReadStream } from "node:fs";
import { writeFile, mkdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { env } from "@huggingface/transformers";
import { KokoroTTS } from "kokoro-js";
import { chromium } from "playwright";
import { loadAllSentences } from "../src/data/loadSentences.ts";
import type { JaLevel } from "../src/types.ts";
import { assertFfmpegAvailable, wavToOpus } from "./wav-to-opus.ts";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const PREFERRED_PORT = 9876;
const MODEL_ID = "onnx-community/Kokoro-82M-v1.0-ONNX";
const VOICE = "jf_alpha";
const SPEED = 0.9;

env.allowLocalModels = true;
env.allowRemoteModels = false;
env.localModelPath = path.join(ROOT, "public", "models") + path.sep;

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".wasm": "application/wasm",
  ".onnx": "application/octet-stream",
  ".bin": "application/octet-stream",
  ".tar": "application/octet-stream",
  ".gz": "application/gzip",
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

async function getAvailablePort(preferred = PREFERRED_PORT): Promise<number> {
  return new Promise((resolve, reject) => {
    const probe = createNetServer();
    probe.once("error", (error: NodeJS.ErrnoException) => {
      if (error.code !== "EADDRINUSE") {
        reject(error);
        return;
      }
      const fallback = createNetServer();
      fallback.listen(0, "127.0.0.1", () => {
        const address = fallback.address();
        const port = typeof address === "object" && address ? address.port : 0;
        fallback.close(() => resolve(port));
      });
      fallback.once("error", reject);
    });
    probe.listen(preferred, "127.0.0.1", () => {
      const address = probe.address();
      const port = typeof address === "object" && address ? address.port : preferred;
      probe.close(() => resolve(port));
    });
  });
}

async function startServer(port: number): Promise<Server> {
  return new Promise((resolve, reject) => {
    const server = createServer(async (req, res) => {
      try {
        const url = req.url ?? "/";
        const filePath = safePath(url === "/" ? "/scripts/phonemize.html" : url);
        if (!filePath) {
          res.writeHead(403);
          res.end("Forbidden");
          return;
        }
        const info = await stat(filePath);
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, {
          "Content-Type": MIME[ext] ?? "application/octet-stream",
          "Content-Length": info.size,
          "Cache-Control": "no-store",
        });
        const stream = createReadStream(filePath);
        stream.on("error", () => {
          if (!res.headersSent) res.writeHead(500);
          res.end();
        });
        req.on("close", () => stream.destroy());
        stream.pipe(res);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });
    server.once("error", reject);
    server.listen(port, "127.0.0.1", () => resolve(server));
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
    phonemizeJa?: (text: string) => Promise<string>;
  }
}

export async function generateJapanese(
  limit = Infinity,
  levels?: JaLevel[],
  overwrite = false,
): Promise<void> {
  await assertFfmpegAvailable();

  const outDir = path.join(ROOT, "public", "audio", "ja");
  await mkdir(outDir, { recursive: true });
  let sentences = await loadAllSentences("ja");
  if (levels?.length) {
    const allowed = new Set(levels);
    sentences = sentences.filter((sentence) => allowed.has(sentence.level as JaLevel));
  }

  console.log("Loading Kokoro fp32 (CPU)…");
  const tts = await KokoroTTS.from_pretrained(MODEL_ID, { dtype: "fp32", device: "cpu" });
  console.log("Kokoro engine ready.\n");

  const port = await getAvailablePort();
  const server = await startServer(port);
  console.log(`OpenJTalk phonemizer on http://127.0.0.1:${port}\n`);

  const browser = await chromium.launch({
    headless: true,
    args: ["--disable-dev-shm-usage", "--no-sandbox"],
  });
  const page = await browser.newPage();
  page.on("console", (msg) => console.log(`[page] ${msg.text()}`));
  page.on("pageerror", (error) => console.error("[pageerror]", error.message));

  try {
    await page.goto(`http://127.0.0.1:${port}/scripts/phonemize.html`, {
      waitUntil: "domcontentloaded",
      timeout: 120_000,
    });
    await page.waitForFunction(() => window.ready === true, undefined, { timeout: 300_000 });
    console.log("OpenJTalk ready.\n");

    let done = 0;
    let skipped = 0;

    for (const sentence of sentences) {
      if (done + skipped >= limit) break;
      const out = path.join(outDir, `${sentence.id}.opus`);
      if (!overwrite && (await fileReady(out))) {
        skipped += 1;
        continue;
      }

      const tempWav = path.join(outDir, `${sentence.id}.wav.tmp`);
      const started = Date.now();
      process.stdout.write(`[ja] ${sentence.id} … `);
      try {
        const phonemes = await page.evaluate(async (text) => {
          if (!window.phonemizeJa) throw new Error("phonemizeJa missing");
          return window.phonemizeJa(text);
        }, sentence.en);

        const { input_ids } = tts.tokenizer(phonemes, { truncation: true });
        const raw = await tts.generate_from_ids(input_ids, { voice: VOICE, speed: SPEED });
        await raw.save(tempWav);
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
  const overwrite = process.argv.includes("--overwrite");
  generateJapanese(limit, levels, overwrite).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
