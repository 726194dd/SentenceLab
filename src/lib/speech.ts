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
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const synth = window.speechSynthesis;
  if (synth.speaking || synth.pending) synth.cancel();
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

function warmupBrowserVoices() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener("voiceschanged", () => {
    window.speechSynthesis.getVoices();
  }, { once: true });
}

export function warmupSpeech(): void {
  warmupBrowserVoices();
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

const FEMALE_VOICE =
  /female|woman|samantha|karen|moira|tessa|fiona|victoria|kate|serena|nicky|allison|susan|zira|hazel|aria|jenny|salli|ivy|joanna|kendra|kimberly|emma|amy|ava|linda|siri|google us english$|google uk english female/i;
const MALE_VOICE =
  /male|\bman\b|\bguy\b|david|mark|alex|daniel|fred|tom|james|brian|matthew|justin|kevin|rishi|oliver|arthur|aaron|albert|gordon|lee|google uk english male/i;

function voiceLabel(voice: SpeechSynthesisVoice): string {
  return `${voice.name} ${voice.voiceURI}`;
}

function isFemaleVoice(voice: SpeechSynthesisVoice): boolean {
  return FEMALE_VOICE.test(voiceLabel(voice));
}

function isMaleVoice(voice: SpeechSynthesisVoice): boolean {
  const label = voiceLabel(voice);
  return MALE_VOICE.test(label) && !FEMALE_VOICE.test(label);
}

function pickNaturalVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices().filter((voice) => /^en\b/i.test(voice.lang));
  if (voices.length === 0) return undefined;

  const score = (voice: SpeechSynthesisVoice) => {
    const label = voiceLabel(voice);
    let rank = 8;
    if (isFemaleVoice(voice)) rank -= 6;
    if (isMaleVoice(voice)) rank += 8;
    if (/neural|natural|enhanced|premium|online|siri/i.test(label)) rank -= 2;
    if (/en-US/i.test(voice.lang)) rank -= 1;
    return rank;
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
      const voice = pickNaturalVoice();
      if (voice) utterance.voice = voice;
      utterance.pitch = voice && isMaleVoice(voice) ? 1.18 : 1;
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
