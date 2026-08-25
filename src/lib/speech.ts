import type { KokoroJP } from "kokoro-js-jp";

export type SpeechStatus = "idle" | "loading" | "speaking";

const EN_VOICE = "af_heart";
const JA_VOICE = "jf_alpha";
const SPEED = 0.9;

const cache = new Map<string, Blob>();
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

export function hushSpeech(): void {
  playToken += 1;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.removeAttribute("src");
    currentAudio = null;
  }
  setStatus("idle");
}

async function loadEngine(): Promise<KokoroJP> {
  if (!enginePromise) {
    enginePromise = (async () => {
      const { KokoroJP } = await import("kokoro-js-jp");
      const base = { dtype: "fp32" as const };
      const hasGpu = typeof navigator !== "undefined" && "gpu" in navigator;
      if (hasGpu) {
        try {
          const engine = await KokoroJP.load({ ...base, device: "webgpu" });
          return engine;
        } catch {
          // Some machines advertise GPU but fail at runtime.
        }
      }
      return KokoroJP.load({ ...base, device: "wasm" });
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

function canUseKokoro(): boolean {
  if (typeof navigator === "undefined") return false;
  const iOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  return !iOS;
}

export function warmupSpeech(): void {
  warmupBrowserVoices();
}

/** Preload Kokoro + Open JTalk dictionary when user picks Japanese. */
export function warmupJapaneseSpeech(): void {
  void loadEngine();
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
    if (FEMALE_VOICE.test(label)) rank -= 6;
    if (MALE_VOICE.test(label)) rank += 8;
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

function pickJapaneseVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices().filter((voice) => /^ja/i.test(voice.lang));
  if (voices.length === 0) return undefined;
  const score = (voice: SpeechSynthesisVoice) => {
    let rank = 8;
    if (/ja-JP/i.test(voice.lang)) rank -= 4;
    if (/neural|premium|enhanced|kyoko|otoya|nanami/i.test(voiceLabel(voice))) rank -= 2;
    return rank;
  };
  return [...voices].sort((a, b) => score(a) - score(b))[0];
}

function speakWithBrowserJa(text: string, token: number): Promise<void> {
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
      utterance.lang = "ja-JP";
      utterance.rate = 0.92;
      const voice = pickJapaneseVoice();
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
  const engine = await loadEngine();
  if (token !== playToken) return;
  const raw = await engine.speak(text, voice, SPEED);
  if (token !== playToken) return;
  const blob = raw.toBlob();
  cache.set(key, blob);
  await playBlob(blob, token);
}

export async function speakJapanese(text: string): Promise<void> {
  const token = ++playToken;
  activeText = text;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  stopBrowserSpeech();

  try {
    await synthesizeWithKokoro(text, JA_VOICE, "ja", token);
  } catch {
    if (token !== playToken) return;
    await speakWithBrowserJa(text, token);
  }
}

export async function speakTarget(text: string, lang: "en" | "ja" = "en"): Promise<void> {
  if (lang === "ja") {
    await speakJapanese(text);
    return;
  }
  await speakEnglish(text);
}

export async function speakEnglish(text: string): Promise<void> {
  const token = ++playToken;
  activeText = text;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  stopBrowserSpeech();

  if (!canUseKokoro()) {
    await speakWithBrowser(text, token);
    return;
  }

  setStatus("loading");
  try {
    await synthesizeWithKokoro(text, EN_VOICE, "en", token);
  } catch {
    if (token !== playToken) return;
    setStatus("idle");
  }
}
