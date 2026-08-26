import { frontendToPhonemes } from "/scripts/ja-hepburn.mjs";

const statusEl = document.getElementById("status");
let nextId = 1;
const pending = new Map();

const worker = new Worker("/public/kokoro-js-jp/browser/worker.js", { type: "module" });

worker.onmessage = (event) => {
  const { id, ok, result, error } = event.data;
  const entry = pending.get(id);
  if (!entry) return;
  pending.delete(id);
  ok ? entry.resolve(result) : entry.reject(new Error(error ?? "worker failed"));
};

worker.onerror = (event) => {
  for (const [, entry] of pending) entry.reject(new Error(event.message));
  pending.clear();
};

function call(method, ...args) {
  const id = nextId++;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    worker.postMessage({ id, method, args });
  });
}

function setStatus(text) {
  if (statusEl) statusEl.textContent = text;
  console.log(text);
}

try {
  setStatus("Loading OpenJTalk…");
  await call("configure", {
    dicArchiveUrl: "/public/kokoro-js-jp/open_jtalk_dic_utf_8-1.11.tar.gz",
    voiceUrl: "/public/kokoro-js-jp/openjtalk-voice.htsvoice",
  });

  window.phonemizeJa = async (text) => {
    const nodes = await call("runFrontend", text);
    return frontendToPhonemes(nodes);
  };

  setStatus("Ready");
  window.ready = true;
} catch (error) {
  setStatus(`Error: ${error?.message ?? error}`);
  console.error(error);
}
