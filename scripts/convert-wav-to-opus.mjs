import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const execFileAsync = promisify(execFile);
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const MIN_SIZE = 256;

async function fileReady(filePath) {
  try {
    return (await stat(filePath)).size > MIN_SIZE;
  } catch {
    return false;
  }
}

async function wavToOpus(wavPath, opusPath) {
  await execFileAsync(
    "ffmpeg",
    ["-y", "-i", wavPath, "-c:a", "libopus", "-b:a", "48k", "-application", "voip", opusPath],
    { windowsHide: true },
  );
}

async function convertDir(lang) {
  const dir = path.join(ROOT, "public", "audio", lang);
  let converted = 0;
  let skipped = 0;

  let entries;
  try {
    entries = await readdir(dir);
  } catch {
    console.log(`${lang}: directory missing, skipping`);
    return { converted, skipped };
  }

  for (const name of entries) {
    if (!name.endsWith(".wav")) continue;
    const id = name.slice(0, -4);
    const wavPath = path.join(dir, name);
    const opusPath = path.join(dir, `${id}.opus`);
    if (await fileReady(opusPath)) {
      skipped += 1;
      continue;
    }
    process.stdout.write(`[${lang}] ${id} … `);
    try {
      await wavToOpus(wavPath, opusPath);
      await unlink(wavPath);
      converted += 1;
      const size = (await stat(opusPath)).size;
      console.log(`ok (${(size / 1024).toFixed(0)} KB)`);
    } catch (error) {
      console.log(`FAIL: ${error instanceof Error ? error.message : error}`);
    }
  }

  return { converted, skipped };
}

try {
  await execFileAsync("ffmpeg", ["-version"], { windowsHide: true });
} catch {
  console.error("ffmpeg not found on PATH. Install ffmpeg before running this script.");
  process.exit(1);
}

let totalConverted = 0;
let totalSkipped = 0;
for (const lang of ["en", "ja"]) {
  const { converted, skipped } = await convertDir(lang);
  console.log(`${lang}: converted ${converted}, skipped ${skipped}`);
  totalConverted += converted;
  totalSkipped += skipped;
}
console.log(`done: converted ${totalConverted}, skipped ${totalSkipped}`);
