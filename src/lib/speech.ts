import type { KokoroTTS } from "kokoro-js";

export type SpeechStatus = "idle" | "loading" | "speaking";

const MODEL_ID = "onnx-community/Kokoro-82M-v1.0-ONNX";
const VOICE = "af_heart";
const SPEED = 0.9;

const cache = new Map<string, Blob>();
const listeners = new Set<(status: SpeechStatus) => void>();

let status: SpeechStatus = "idle";
let activeText: string | null = null;
let enginePromise: Promise<KokoroTTS> | null = null;
let engineReady = false;
let currentAudio: HTMLAudioElement | null = null;
let playToken = 0;

function setStatus(next: SpeechStatus) {
  status = next;
  if (next === "idle") activeText = null;
  listeners.forEach((listener) => listener(next));
}

export function currentSpeechText(): string | null {
  return activeText;
}

export function subscribeSpeech(listener: (next: SpeechStatus) => void): () => void {
  listeners.add(listener);
  listener(status);
  return () => {
    listeners.delete(listener);
  };
}

function stopBrowserSpeech() {
  if (typeof window !== "undefined" && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

export function stopSpeech(): void {
  playToken += 1;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.removeAttribute("src");
    currentAudio = null;
  }
  stopBrowserSpeech();
  setStatus("idle");
}

async function loadEngine(): Promise<KokoroTTS> {
  if (!enginePromise) {
    enginePromise = (async () => {
      const { KokoroTTS } = await import("kokoro-js");
      const hasGpu = typeof navigator !== "undefined" && "gpu" in navigator;
      if (hasGpu) {
        try {
          const engine = await KokoroTTS.from_pretrained(MODEL_ID, {
            dtype: "fp32",
            device: "webgpu",
          });
          engineReady = true;
          return engine;
        } catch {
          // Some machines advertise GPU but fail at runtime.
        }
      }
      const engine = await KokoroTTS.from_pretrained(MODEL_ID, {
        dtype: "fp32",
        device: "wasm",
      });
      engineReady = true;
      return engine;
    })().catch((error) => {
      enginePromise = null;
      engineReady = false;
      throw error;
    });
  }
  return enginePromise;
}

export function warmupSpeech(): void {
  void loadEngine().catch(() => {
    // Browser TTS remains available if the neural model cannot load.
  });
}

function playBlob(blob: Blob, token: number): Promise<void> {
  stopBrowserSpeech();
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  const element = new Audio(URL.createObjectURL(blob));
  currentAudio = element;
  setStatus("speaking");

  return new Promise((resolve, reject) => {
    element.onended = () => {
      URL.revokeObjectURL(element.src);
      if (currentAudio === element) currentAudio = null;
      if (token === playToken) setStatus("idle");
      resolve();
    };
    element.onerror = () => {
      URL.revokeObjectURL(element.src);
      if (currentAudio === element) currentAudio = null;
      reject(new Error("audio playback failed"));
    };
    void element.play().catch(reject);
  });
}

function pickNaturalVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices().filter((voice) => voice.lang.startsWith("en"));
  const score = (voice: SpeechSynthesisVoice) => {
    const name = voice.name;
    if (/neural|natural|online|google|enhanced|premium|aria|jenny|guy/i.test(name)) return 0;
    if (/zira|david|mark|hazel/i.test(name)) return 3;
    if (/US|GB|UK/i.test(voice.lang)) return 1;
    return 2;
  };
  return [...voices].sort((a, b) => score(a) - score(b))[0];
}

function speakWithBrowser(text: string, token: number): Promise<void> {
  stopBrowserSpeech();
  if (typeof window === "undefined" || !window.speechSynthesis) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const speak = () => {
      if (token !== playToken) {
        resolve();
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.88;
      utterance.pitch = 1;
      const voice = pickNaturalVoice();
      if (voice) utterance.voice = voice;
      utterance.onend = () => {
        if (token === playToken) setStatus("idle");
        resolve();
      };
      utterance.onerror = () => {
        if (token === playToken) setStatus("idle");
        resolve();
      };
      setStatus("speaking");
      window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.addEventListener("voiceschanged", speak, { once: true });
      window.setTimeout(speak, 250);
      return;
    }
    speak();
  });
}

export async function speakEnglish(text: string): Promise<void> {
  const token = ++playToken;
  activeText = text;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  stopBrowserSpeech();

  const cached = cache.get(text);
  if (cached) {
    try {
      await playBlob(cached, token);
      return;
    } catch {
      cache.delete(text);
    }
  }

  if (!engineReady) {
    void loadEngine();
    await speakWithBrowser(text, token);
    return;
  }

  setStatus("loading");
  try {
    const engine = await loadEngine();
    if (token !== playToken) return;
    const raw = await engine.generate(text, { voice: VOICE, speed: SPEED });
    if (token !== playToken) return;
    const blob = raw.toBlob();
    cache.set(text, blob);
    await playBlob(blob, token);
  } catch {
    if (token !== playToken) return;
    await speakWithBrowser(text, token);
  }
}
