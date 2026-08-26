import { Capacitor } from "@capacitor/core";
import { TextToSpeech } from "@capacitor-community/text-to-speech";
import type { KokoroJP } from "kokoro-js-jp";

export type SpeechStatus = "idle" | "loading" | "speaking";

const EN_VOICE = "af_heart";
const JA_VOICE = "jf_alpha";
const SPEED = 0.9;

const cache = new Map<string, Blob>();
const audioFileCache = new Map<string, Blob>();
const listeners = new Set<(status: SpeechStatus) => void>();

let status: SpeechStatus = "idle";
let activeText: string | null = null;
let enginePromise: Promise<KokoroJP> | null = null;
let currentAudio: HTMLAudioElement | null = null;
let playToken = 0;

function setStatus(next: SpeechStatus) {
  status = next;
  if (next === "idle") activeText = null;
  listeners.forEach((listener) => listener(next));
}

function cacheKey(lang: "en" | "ja", text: string): string {
  return `${lang}\0${text}`;
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

function isNativePlatform(): boolean {
  return Capacitor.isNativePlatform();
}

function isOfflineNativeApp(): boolean {
  return (
    import.meta.env.VITE_OFFLINE_ONLY === "true" &&
    (Capacitor.getPlatform() === "android" || Capacitor.getPlatform() === "ios")
  );
}

function usePrerecordedAudio(): boolean {
  if (isOfflineNativeApp()) return true;
  if (Capacitor.getPlatform() === "android") return true;
  // Web uses the same fp32 Opus files as mobile for sentence Listen.
  return Capacitor.getPlatform() === "web";
}

function useNativeTts(): boolean {
  if (isOfflineNativeApp()) return false;
  return Capacitor.getPlatform() === "ios";
}

function canUseKokoro(): boolean {
  if (import.meta.env.VITE_OFFLINE_ONLY === "true") return false;
  if (typeof navigator === "undefined") return false;
  return Capacitor.getPlatform() === "web";
}

function prerecordedAudioUrl(lang: "en" | "ja", id: string): string {
  return `${import.meta.env.BASE_URL}audio/${lang}/${id}.opus`;
}

function stopNativeSpeech() {
  if (!isNativePlatform()) return;
  void TextToSpeech.stop().catch(() => {});
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
  stopNativeSpeech();
  stopBrowserSpeech();
  setStatus("idle");
}

export function hushSpeech(): void {
  playToken += 1;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.removeAttribute("src");
    currentAudio = null;
  }
  stopNativeSpeech();
  setStatus("idle");
}

function kokoroAssetsUrl(): string {
  return `${import.meta.env.BASE_URL}kokoro-js-jp`;
}

async function configureKokoroRuntime(): Promise<void> {
  const [{ env: transformersEnv }, { env: kokoroEnv }] = await Promise.all([
    import("@huggingface/transformers"),
    import("kokoro-js"),
  ]);
  kokoroEnv.wasmPaths = `${import.meta.env.BASE_URL}assets/`;
  transformersEnv.allowLocalModels = true;
  transformersEnv.localModelPath = `${import.meta.env.BASE_URL}models`;
  const wasm = transformersEnv.backends.onnx.wasm;
  if (wasm) wasm.numThreads = 1;
}

async function loadEngine(): Promise<KokoroJP> {
  if (!enginePromise) {
    enginePromise = (async () => {
      const { KokoroJP } = await import("kokoro-js-jp");
      await configureKokoroRuntime();

      const base = {
        dtype: "fp32" as const,
        device: "wasm" as const,
        japanese: { assetsUrl: kokoroAssetsUrl() },
      };

      return KokoroJP.load(base);
    })().catch((error) => {
      enginePromise = null;
      throw error;
    });
  }
  return enginePromise;
}

function warmupBrowserVoices() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener(
    "voiceschanged",
    () => {
      window.speechSynthesis.getVoices();
    },
    { once: true },
  );
}

const KOKORO_LOAD_TIMEOUT_MS = 45_000;
const KOKORO_SYNTH_TIMEOUT_MS = 30_000;

function withTimeout<T>(promise: Promise<T>, ms: number, message: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error(message)), ms);
    promise.then(
      (value) => {
        window.clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        window.clearTimeout(timer);
        reject(error);
      },
    );
  });
}

export function warmupSpeech(): void {
  warmupBrowserVoices();
}

/** Preload Kokoro engine on web (skipped on mobile apps). */
export function warmupKokoroSpeech(): void {
  if (!canUseKokoro()) return;
  void loadEngine();
}

/** @deprecated Use warmupKokoroSpeech */
export function warmupJapaneseSpeech(): void {
  warmupKokoroSpeech();
}

async function speakWithNative(text: string, lang: "en" | "ja", token: number): Promise<void> {
  if (token !== playToken) return;
  setStatus("speaking");
  try {
    await TextToSpeech.speak({
      text,
      lang: lang === "ja" ? "ja-JP" : "en-US",
      rate: lang === "ja" ? 0.92 : 0.88,
      pitch: 1.0,
      volume: 1.0,
    });
  } finally {
    if (token === playToken) setStatus("idle");
  }
}

function playBlob(blob: Blob, token: number): Promise<void> {
  stopNativeSpeech();
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

async function playPrerecorded(
  lang: "en" | "ja",
  audioId: string,
  token: number,
): Promise<boolean> {
  const key = `${lang}/${audioId}`;
  let blob = audioFileCache.get(key);

  if (!blob) {
    setStatus("loading");
    try {
      const res = await fetch(prerecordedAudioUrl(lang, audioId));
      if (!res.ok) return false;
      blob = await res.blob();
      audioFileCache.set(key, blob);
    } catch {
      return false;
    }
  }

  if (token !== playToken) return true;
  try {
    await playBlob(blob, token);
    return true;
  } catch {
    audioFileCache.delete(key);
    return false;
  }
}

async function synthesizeWithKokoro(
  text: string,
  voice: string,
  lang: "en" | "ja",
  token: number,
): Promise<void> {
  const key = cacheKey(lang, text);
  const cached = cache.get(key);
  if (cached) {
    try {
      await playBlob(cached, token);
      return;
    } catch {
      cache.delete(key);
    }
  }

  setStatus("loading");
  const engine = await withTimeout(loadEngine(), KOKORO_LOAD_TIMEOUT_MS, "kokoro engine load timeout");
  if (token !== playToken) return;
  const raw = await withTimeout(
    engine.speak(text, voice, SPEED),
    KOKORO_SYNTH_TIMEOUT_MS,
    "kokoro synthesis timeout",
  );
  if (token !== playToken) return;
  const blob = raw.toBlob();
  cache.set(key, blob);
  await playBlob(blob, token);
}

export async function speakJapanese(text: string, audioId?: string): Promise<void> {
  const token = ++playToken;
  activeText = text;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  stopNativeSpeech();
  stopBrowserSpeech();

  if (usePrerecordedAudio() && audioId) {
    const played = await playPrerecorded("ja", audioId, token);
    if (played) return;
    if (!canUseKokoro()) {
      await speakWithNative(text, "ja", token);
      return;
    }
  } else if (useNativeTts()) {
    await speakWithNative(text, "ja", token);
    return;
  }

  if (!canUseKokoro()) {
    await speakWithNative(text, "ja", token);
    return;
  }

  try {
    await synthesizeWithKokoro(text, JA_VOICE, "ja", token);
  } catch (error) {
    console.error("Kokoro Japanese speech failed:", error);
    if (token !== playToken) return;
    setStatus("idle");
  }
}

export async function speakTarget(
  text: string,
  lang: "en" | "ja" = "en",
  audioId?: string,
): Promise<void> {
  if (lang === "ja") {
    await speakJapanese(text, audioId);
    return;
  }
  await speakEnglish(text, audioId);
}

export async function speakEnglish(text: string, audioId?: string): Promise<void> {
  const token = ++playToken;
  activeText = text;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  stopNativeSpeech();
  stopBrowserSpeech();

  if (usePrerecordedAudio() && audioId) {
    const played = await playPrerecorded("en", audioId, token);
    if (played) return;
    if (!canUseKokoro()) {
      await speakWithNative(text, "en", token);
      return;
    }
  } else if (useNativeTts()) {
    await speakWithNative(text, "en", token);
    return;
  }

  if (!canUseKokoro()) {
    await speakWithNative(text, "en", token);
    return;
  }

  setStatus("loading");
  try {
    await synthesizeWithKokoro(text, EN_VOICE, "en", token);
  } catch (error) {
    console.error("Kokoro English speech failed:", error);
    if (token !== playToken) return;
    setStatus("idle");
  }
}
