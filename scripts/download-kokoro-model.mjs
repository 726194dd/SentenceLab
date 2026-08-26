import { access, mkdir, stat } from "fs/promises";
import { createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import path from "path";
import { fileURLToPath } from "url";

const REPO = "onnx-community/Kokoro-82M-v1.0-ONNX";
const HF_HOST = (process.env.HF_ENDPOINT ?? "https://hf-mirror.com").replace(/\/$/, "");
const HF_BASE = `${HF_HOST}/${REPO}/resolve/main`;
const OUT_ROOT = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
  "models",
  REPO,
);

/** fp32 ONNX for offline audio generation + voice bins. */
const FILES = [
  "config.json",
  "tokenizer.json",
  "tokenizer_config.json",
  "onnx/model.onnx",
  "voices/af_heart.bin",
  "voices/jf_alpha.bin",
];

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function download(rel) {
  const dest = path.join(OUT_ROOT, rel);
  await mkdir(path.dirname(dest), { recursive: true });

  if (await exists(dest)) {
    const info = await stat(dest);
    if (info.size > 1024) {
      console.log(`skip ${rel} (${(info.size / 1024 / 1024).toFixed(1)} MB)`);
      return;
    }
  }

  const url = `${HF_BASE}/${rel}`;
  console.log(`download ${rel} ...`);

  let lastError;
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(120_000) });
      if (!res.ok || !res.body) {
        throw new Error(`HTTP ${res.status}`);
      }
      await pipeline(res.body, createWriteStream(dest));
      const info = await stat(dest);
      console.log(`  done ${(info.size / 1024 / 1024).toFixed(1)} MB`);
      return;
    } catch (error) {
      lastError = error;
      console.warn(`  attempt ${attempt}/5 failed: ${error.message ?? error}`);
      await new Promise((resolve) => setTimeout(resolve, attempt * 2000));
    }
  }

  throw new Error(`Failed to download ${url}: ${lastError?.message ?? lastError}`);
}

console.log(`Kokoro model → ${OUT_ROOT}`);
for (const rel of FILES) {
  await download(rel);
}
console.log("Kokoro model ready.");
