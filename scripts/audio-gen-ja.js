import { KokoroJP } from "/node_modules/kokoro-js-jp/dist/kokoro-jp.web.js";

const statusEl = document.getElementById("status");

function setStatus(text) {
  if (statusEl) statusEl.textContent = text;
  console.log(text);
}

try {
  setStatus("Loading Kokoro fp32…");
  const tts = await KokoroJP.load({
    dtype: "fp32",
    device: "wasm",
    japanese: { assetsUrl: "/public/kokoro-js-jp" },
  });

  setStatus("Ready");

  window.speakToBytes = async (text, voice, speed) => {
    const audio = await tts.speak(text, voice, speed);
    const buffer = await audio.toBlob().arrayBuffer();
    return Array.from(new Uint8Array(buffer));
  };

  window.ready = true;
} catch (error) {
  setStatus(`Error: ${error?.message ?? error}`);
  console.error(error);
}
