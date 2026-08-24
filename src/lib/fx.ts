import { hushSpeech } from "./speech";
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
const htmlPlayers: Partial<Record<Sfx, HTMLAudioElement>> = {};

let ctx: AudioContext | null = null;
let decodePromise: Promise<void> | null = null;
let rightPlaying = false;
let nextQueued = false;
let rightSource: AudioBufferSourceNode | null = null;

function audioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  if (!ctx || ctx.state === "closed") ctx = new Ctor();
  return ctx;
}

function htmlPlayer(name: Sfx): HTMLAudioElement {
  const existing = htmlPlayers[name];
  if (existing) return existing;
  const el = new Audio(urls[name]);
  el.preload = "auto";
  el.setAttribute("playsinline", "true");
  el.volume = 1;
  htmlPlayers[name] = el;
  return el;
}

function prefetch(): void {
  (Object.keys(urls) as Sfx[]).forEach((name) => {
    htmlPlayer(name);
    if (raw[name]) return;
    void fetch(urls[name])
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        raw[name] = buffer;
      })
      .catch(() => undefined);
  });
}

prefetch();

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
  const el = htmlPlayer(name);
  try {
    el.pause();
    el.currentTime = 0;
  } catch {
    // iOS may throw if metadata is not ready yet
  }
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
  const audio = audioContext();
  if (audio && audio.state !== "running") {
    void audio.resume();
  }
  if (audio?.state === "running" && buffers[name] && playBuffer(audio, name)) {
    return;
  }
  playHtml(name);
  if (audio) {
    void audio.resume().then(() => {
      void decodeAll(audio);
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

let htmlUnlocked = false;

export function unlockFx(): void {
  if (typeof window === "undefined") return;
  const audio = audioContext();
  if (audio && audio.state !== "running") {
    void audio.resume();
  }
  if (audio) void decodeAll(audio);
  if (htmlUnlocked) return;
  htmlUnlocked = true;
  const probe = new Audio(urls.right);
  probe.preload = "auto";
  probe.setAttribute("playsinline", "true");
  probe.muted = true;
  void probe.play().then(() => {
    probe.pause();
  }).catch(() => {
    htmlUnlocked = false;
  });
}

export function playCheckFx(correct: boolean): void {
  playSfx(correct ? "right" : "wrong");
}

export function playNextFx(): void {
  playSfx("next");
}

let lastTypeAt = 0;

export function playTypeFx(): void {
  const audio = audioContext();
  if (!audio) return;
  if (audio.state !== "running") {
    void audio.resume();
  }

  const now = performance.now();
  if (now - lastTypeAt < 24) return;
  lastTypeAt = now;

  try {
    const t = audio.currentTime;
    const gain = audio.createGain();
    gain.connect(audio.destination);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.231, t + 0.002);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);

    const osc = audio.createOscillator();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(920 + Math.random() * 180, t);
    osc.frequency.exponentialRampToValueAtTime(520, t + 0.028);
    osc.connect(gain);
    osc.start(t);
    osc.stop(t + 0.042);
  } catch {
    // ignore unsupported or suspended audio
  }
}
