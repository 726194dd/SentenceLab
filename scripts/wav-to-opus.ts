import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

/** Convert a WAV file to Opus speech encoding via ffmpeg (must be on PATH). */
export async function wavToOpus(wavPath: string, opusPath: string): Promise<void> {
  await execFileAsync(
    "ffmpeg",
    ["-y", "-i", wavPath, "-c:a", "libopus", "-b:a", "48k", "-application", "voip", opusPath],
    { windowsHide: true },
  );
}

export async function assertFfmpegAvailable(): Promise<void> {
  try {
    await execFileAsync("ffmpeg", ["-version"], { windowsHide: true });
  } catch {
    throw new Error(
      "ffmpeg not found on PATH. Install ffmpeg and ensure it is available before generating audio.",
    );
  }
}
