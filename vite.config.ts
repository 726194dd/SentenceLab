import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const ROOT = path.dirname(fileURLToPath(import.meta.url));

function levelChunk(id: string): string | undefined {
  const ja = id.match(/\/ja\/(?:level|packs|more)\/(N[1-5])\.ts/i);
  if (ja) return `sentences-ja-${ja[1].toLowerCase()}`;

  const enLevel = id.match(/\/en\/level\/(A[12]|B[12]|C1)\.ts/i);
  if (enLevel) return `sentences-en-${enLevel[1].toLowerCase()}`;

  const enPack = id.match(/\/more\/(a[12]|b[12]|c1)\.ts/i);
  if (enPack) return `sentences-en-${enPack[1]}`;

  const enBase = id.match(/\/data\/(a[12]|b[12]|c1)\.ts$/i);
  if (enBase) return `sentences-en-${enBase[1].toLowerCase()}`;

  return undefined;
}

export default defineConfig(({ mode }) => {
  const offlineOnly =
    mode === "android" || process.env.VITE_OFFLINE_ONLY === "true";

  return {
    base: process.env.BASE_PATH || "/",
    plugins: [react()],
    optimizeDeps: {
      exclude: offlineOnly ? [] : ["kokoro-js", "kokoro-js-jp"],
    },
    resolve: {
      alias: offlineOnly
        ? {
            "kokoro-js": path.resolve(ROOT, "src/stubs/kokoro-js.ts"),
            "kokoro-js-jp": path.resolve(ROOT, "src/stubs/kokoro-js-jp.ts"),
            "@huggingface/transformers": path.resolve(ROOT, "src/stubs/transformers.ts"),
          }
        : undefined,
    },
    worker: {
      format: "es",
    },
    build: {
      target: "esnext",
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (
              !offlineOnly &&
              (id.includes("node_modules/kokoro-js-jp") || id.includes("onnxruntime-web"))
            ) {
              return "kokoro";
            }
            const level = levelChunk(id);
            if (level) return level;
            if (id.includes("/src/data/ja/") || id.includes("/src/data/en/")) {
              return "sentences-shared";
            }
          },
        },
      },
    },
  };
});
