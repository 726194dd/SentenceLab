import { env } from "@huggingface/transformers";
import { KokoroTTS } from "kokoro-js";
import { mkdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadAllSentences } from "../src/data/loadSentences.ts";
import { assertFfmpegAvailable, wavToOpus } from "./wav-to-opus.ts";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const MODEL_ID = "onnx-community/Kokoro-82M-v1.0-ONNX";
const VOICE = "af_heart";
const SPEED = 0.9;

env.allowLocalModels = true;
env.allowRemoteModels = false;
env.localModelPath = path.join(ROOT, "public", "models") + path.sep;

async function fileReady(filePath: string): Promise<boolean> {
  try {
    return (await stat(filePath)).size > 256;
  } catch {
    return false;
  }
}

export async function generateEnglish(limit = Infinity): Promise<void> {
  await assertFfmpegAvailable();

  const outDir = path.join(ROOT, "public", "audio", "en");
  await mkdir(outDir, { recursive: true });

  console.log("Loading Kokoro fp32 (CPU)…");
  const tts = await KokoroTTS.from_pretrained(MODEL_ID, { dtype: "fp32", device: "cpu" });
  console.log("Engine ready.\n");

  const sentences = await loadAllSentences("en");
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
    process.stdout.write(`[en] ${sentence.id} … `);
    try {
      const audio = await tts.generate(sentence.en, { voice: VOICE, speed: SPEED });
      await audio.save(tempWav);
      await wavToOpus(tempWav, out);
      await unlink(tempWav).catch(() => {});
      done += 1;
      const size = (await stat(out)).size;
      console.log(`ok (${((Date.now() - started) / 1000).toFixed(1)}s, ${(size / 1024).toFixed(0)} KB)`);
    } catch (error) {
      await unlink(tempWav).catch(() => {});
      console.log(`FAIL: ${error instanceof Error ? error.message : error}`);
    }
  }

  console.log(`en: generated ${done}, skipped ${skipped}`);
}

if (process.argv[1]?.includes("generate-audio-en")) {
  const limitArg = process.argv.indexOf("--limit");
  const limit = limitArg >= 0 ? Number(process.argv[limitArg + 1]) : Infinity;
  generateEnglish(limit).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
