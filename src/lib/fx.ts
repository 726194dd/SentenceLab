import { hushSpeech } from "./speech";
import { clickFxVolumeScale, isClickFxEnabled, isTypeFxEnabled, typeFxVolumeScale } from "./settings";
import type { LanguageId } from "../types";
import nextUrl from "../assets/sfx/next02.wav";
import rightUrl from "../assets/sfx/right01.wav";
import wrongUrl from "../assets/sfx/wrong01.wav";

type Sfx = "right" | "wrong" | "next";

const urls: Record<Sfx, string> = {
  right: rightUrl,
  wrong: wrongUrl,
  next: nextUrl,
};

const raw: Partial<Record<Sfx, ArrayBuffer>> = {};
const buffers: Partial<Record<Sfx, AudioBuffer>> = {};

let ctx: AudioContext | null = null;
let decodePromise: Promise<void> | null = null;
let rightPlaying = false;
let nextQueued = false;
let rightSource: AudioBufferSourceNode | null = null;
let lastTypeAt = 0;
let lastClickFxAt = 0;

type UiChirpOptions = {
  start: number;
  end: number;
  peak?: number;
  duration?: number;
  playbackRate?: number;
};

function audioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  if (!ctx || ctx.state === "closed") ctx = new Ctor();
  return ctx;
}

function prefersHtmlSfx(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;
  const coarse = window.matchMedia?.("(pointer: coarse)").matches;
  const iOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  return coarse || iOS || /Android/i.test(navigator.userAgent);
}

let prefetchStarted = false;

function prefetch(): void {
  if (prefetchStarted) return;
  prefetchStarted = true;
  (Object.keys(urls) as Sfx[]).forEach((name) => {
    if (raw[name]) return;
    void fetch(urls[name])
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        raw[name] = buffer;
      })
      .catch(() => undefined);
  });
}

async function decodeAll(audio: AudioContext): Promise<void> {
  if (decodePromise) {
    await decodePromise;
    return;
  }
  decodePromise = (async () => {
    for (const name of Object.keys(urls) as Sfx[]) {
      if (buffers[name]) continue;
      let data = raw[name];
      if (!data) {
        const response = await fetch(urls[name]);
        data = await response.arrayBuffer();
        raw[name] = data;
      }
      buffers[name] = await audio.decodeAudioData(data.slice(0));
    }
  })().catch(() => {
    decodePromise = null;
  });
  await decodePromise;
}

async function resumeAudio(): Promise<AudioContext | null> {
  const audio = audioContext();
  if (!audio) return null;
  if (audio.state === "suspended") {
    try {
      await audio.resume();
    } catch {
      return audio;
    }
  }
  return audio;
}

function finishRight(source: AudioBufferSourceNode | null): void {
  if (source && rightSource !== source) return;
  rightSource = null;
  rightPlaying = false;
  if (!nextQueued) return;
  nextQueued = false;
  playNow("next");
}

function playBuffer(audio: AudioContext, name: Sfx): boolean {
  const buffer = buffers[name];
  if (!buffer) return false;
  const source = audio.createBufferSource();
  source.buffer = buffer;
  source.connect(audio.destination);
  if (name === "right") {
    rightSource = source;
    source.onended = () => finishRight(source);
  }
  source.start();
  return true;
}

function playHtml(name: Sfx): void {
  const el = new Audio(urls[name]);
  el.preload = "auto";
  el.setAttribute("playsinline", "true");
  el.volume = 1;
  el.muted = false;
  if (name === "right") {
    el.onended = () => finishRight(null);
  }
  const attempt = el.play();
  if (attempt) {
    void attempt.catch(() => {
      if (name === "right") finishRight(null);
    });
  }
}

function playNow(name: Sfx): void {
  if (prefersHtmlSfx()) {
    playHtml(name);
    return;
  }

  const audio = audioContext();
  if (audio?.state === "running" && buffers[name] && playBuffer(audio, name)) {
    return;
  }

  playHtml(name);

  if (audio) {
    void resumeAudio().then((next) => {
      if (!next) return;
      void decodeAll(next);
    });
  }
}

function playSfx(name: Sfx): void {
  if (name === "next" && rightPlaying) {
    nextQueued = true;
    return;
  }

  if (name === "right") {
    nextQueued = false;
    rightPlaying = true;
    const prev = rightSource;
    rightSource = null;
    if (prev) {
      prev.onended = null;
      try {
        prev.stop();
      } catch {
        // already stopped
      }
    }
  }

  playNow(name);
  hushSpeech();
}

export function unlockFx(): void {
  if (typeof window === "undefined") return;
  prefetch();
  void resumeAudio().then((audio) => {
    if (audio) void decodeAll(audio);
  });
  (Object.keys(urls) as Sfx[]).forEach((name) => {
    const el = new Audio(urls[name]);
    el.preload = "auto";
    el.setAttribute("playsinline", "true");
    el.muted = true;
    void el.play()
      .then(() => {
        el.pause();
        try {
          el.currentTime = 0;
        } catch {
          // iOS may throw before metadata is ready
        }
        el.muted = false;
      })
      .catch(() => undefined);
  });
}

export function playCheckFx(correct: boolean): void {
  playSfx(correct ? "right" : "wrong");
}

export function playNextFx(): void {
  playSfx("next");
}

function playUiChirpOscillator(audio: AudioContext, opts: UiChirpOptions): void {
  const peak = opts.peak ?? 0.09;
  const duration = opts.duration ?? 0.048;
  const t = audio.currentTime;
  const gain = audio.createGain();
  gain.connect(audio.destination);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(peak, t + 0.003);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

  const osc = audio.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(opts.start, t);
  osc.frequency.exponentialRampToValueAtTime(opts.end, t + duration * 0.5);
  osc.connect(gain);
  osc.start(t);
  osc.stop(t + duration + 0.003);
}

function playUiChirp(opts: UiChirpOptions, hush = false): void {
  if (hush) hushSpeech();

  const audio = audioContext();
  if (audio?.state === "running") {
    try {
      playUiChirpOscillator(audio, opts);
      return;
    } catch {
      // fall through to html fallback
    }
  }

  const playbackRate = opts.playbackRate ?? 1.5;

  if (prefersHtmlSfx()) {
    const el = new Audio(nextUrl);
    el.preload = "auto";
    el.setAttribute("playsinline", "true");
    el.volume = Math.min(0.12, (opts.peak ?? 0.09) * 1.1);
    el.playbackRate = playbackRate;
    void el.play().catch(() => undefined);
    void resumeAudio();
    return;
  }

  void resumeAudio().then((ctx) => {
    if (!ctx) return;
    try {
      playUiChirpOscillator(ctx, opts);
    } catch {
      const el = new Audio(nextUrl);
      el.volume = Math.min(0.12, (opts.peak ?? 0.09) * 1.1);
      el.playbackRate = playbackRate;
      void el.play().catch(() => undefined);
    }
  });
}

export function playClickFx(): void {
  if (!isClickFxEnabled()) return;
  const volume = clickFxVolumeScale();
  if (volume <= 0) return;
  const now = performance.now();
  if (now - lastClickFxAt < 36) return;
  lastClickFxAt = now;
  playUiChirp({
    start: 700,
    end: 920,
    peak: 0.075 * volume,
    duration: 0.042,
    playbackRate: 1.48,
  });
}

export function playLangSwitchFx(lang: LanguageId): void {
  if (!isClickFxEnabled()) return;
  const volume = clickFxVolumeScale();
  if (volume <= 0) return;
  const now = performance.now();
  if (now - lastClickFxAt < 36) return;
  lastClickFxAt = now;
  playUiChirp(
    {
      start: lang === "ja" ? 620 : 760,
      end: lang === "ja" ? 880 : 980,
      peak: 0.11 * volume,
      duration: 0.055,
      playbackRate: lang === "ja" ? 1.35 : 1.55,
    },
    true,
  );
}

export function armButtonClickFx(): void {
  if (typeof document === "undefined") return;

  document.addEventListener(
    "click",
    (event) => {
      const button =
        event.target instanceof Element ? event.target.closest("button") : null;
      if (!button || button.disabled || button.dataset.noClickFx === "true") return;

      unlockFx();

      if (button.classList.contains("lang-switch-btn")) {
        if (button.getAttribute("aria-pressed") === "true") return;
        playLangSwitchFx(button.dataset.clickFx === "lang-ja" ? "ja" : "en");
        return;
      }

      playClickFx();
    },
    { capture: true },
  );
}

function playTypeOscillator(audio: AudioContext, volume: number): void {
  const now = performance.now();
  if (now - lastTypeAt < 24) return;
  lastTypeAt = now;

  const t = audio.currentTime;
  const gain = audio.createGain();
  gain.connect(audio.destination);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.231 * volume, t + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);

  const osc = audio.createOscillator();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(920 + Math.random() * 180, t);
  osc.frequency.exponentialRampToValueAtTime(520, t + 0.028);
  osc.connect(gain);
  osc.start(t);
  osc.stop(t + 0.042);
}

export function playTypeFx(): void {
  if (!isTypeFxEnabled()) return;
  const volume = typeFxVolumeScale();
  if (volume <= 0) return;
  const audio = audioContext();
  if (audio?.state === "running") {
    try {
      playTypeOscillator(audio, volume);
      return;
    } catch {
      // fall through to html fallback
    }
  }

  if (prefersHtmlSfx()) {
    const el = new Audio(nextUrl);
    el.preload = "auto";
    el.setAttribute("playsinline", "true");
    el.volume = 0.14 * volume;
    el.playbackRate = 2.6;
    void el.play().catch(() => undefined);
    void resumeAudio();
    return;
  }
}
