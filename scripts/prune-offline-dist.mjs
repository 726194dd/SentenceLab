import { rm, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const ASSETS = path.join(DIST, "assets");

const REMOVE_DIRS = ["models", "kokoro-js-jp"];
const ASSET_PATTERN = /kokoro|ort-wasm|onnxruntime|transformers/i;

async function removeDir(relativePath) {
  const target = path.join(DIST, relativePath);
  await rm(target, { recursive: true, force: true });
  console.log(`Removed dist/${relativePath}`);
}

async function pruneAssets() {
  let files;
  try {
    files = await readdir(ASSETS);
  } catch {
    return;
  }

  for (const file of files) {
    if (!ASSET_PATTERN.test(file)) continue;
    await rm(path.join(ASSETS, file), { force: true });
    console.log(`Removed dist/assets/${file}`);
  }
}

for (const dir of REMOVE_DIRS) {
  await removeDir(dir);
}
await pruneAssets();

console.log("Offline dist prune complete.");
