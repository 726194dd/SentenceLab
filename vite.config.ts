import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["kokoro-js", "kokoro-js-jp"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/kokoro-js-jp") || id.includes("onnxruntime-web")) {
            return "kokoro";
          }
          if (id.includes("/src/data/ja/")) {
            return "sentences-ja";
          }
          if (
            id.includes("/src/data/sentences-en") ||
            id.includes("/src/data/more/") ||
            /\/src\/data\/[abc][12]\.ts$/.test(id)
          ) {
            return "sentences-en";
          }
        },
      },
    },
  },
});
