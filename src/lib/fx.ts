import { stopSpeech } from "./speech";
import nextUrl from "../assets/sfx/next02.wav";
import rightUrl from "../assets/sfx/right01.wav";
import wrongUrl from "../assets/sfx/wrong01.wav";

type Sfx = "right" | "wrong" | "next";

const urls: Record<Sfx, string> = {
  right: rightUrl,
  wrong: wrongUrl,
  next: nextUrl,
};

const buffers: Partial<Record<Sfx, AudioBuffer>> = {};

let ctx: AudioContext | null = null;
let decodePromise: Promise<void> | null = null;
let playGen = 0;
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

async function resume(audio: AudioContext): Promise<boolean> {
  if (audio.state !== "running") {
    try {
      await audio.resume();
    } catch {
      return false;
    }
  }
  return audio.state === "running";
}

async function decodeAll(audio: AudioContext): Promise<void> {
  if (!decodePromise) {
    decodePromise = Promise.all(
      (Object.keys(urls) as Sfx[]).map(async (name) => {
        const response = await fetch(urls[name]);
        const raw = await response.arrayBuffer();
        buffers[name] = await audio.decodeAudioData(raw.slice(0));
      }),
    ).then(() => undefined).catch(() => {
      decodePromise = null;
    });
  }
  await decodePromise;
}

async function ready(): Promise<AudioContext | null> {
  const audio = audioContext();
  if (!audio) return null;
  await resume(audio);
  await decodeAll(audio);
  if (!(await resume(audio))) return null;
  return audio;
}

function finishRight(source: AudioBufferSourceNode): void {
  if (rightSource !== source) return;
  rightSource = null;
  rightPlaying = false;
  if (!nextQueued) return;
  nextQueued = false;
  void start("next");
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
  el.volume = 1;
  if (name === "right") {
    el.onended = () => {
      rightPlaying = false;
      rightSource = null;
      if (!nextQueued) return;
      nextQueued = false;
      playHtml("next");
    };
  }
  void el.play().catch(() => {
    if (name !== "right") return;
    rightPlaying = false;
    if (!nextQueued) return;
    nextQueued = false;
    playHtml("next");
  });
}

async function start(name: Sfx): Promise<void> {
  const gen = playGen;
  const audio = await ready();
  if (gen !== playGen) return;
  if (audio && playBuffer(audio, name)) return;
  playHtml(name);
}

function playSfx(name: Sfx): void {
  stopSpeech();

  if (name === "next" && rightPlaying) {
    nextQueued = true;
    return;
  }

  playGen += 1;
  const gen = playGen;

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

  window.setTimeout(() => {
    if (gen !== playGen) return;
    void start(name);
  }, 40);
}

export function unlockFx(): void {
  if (typeof window === "undefined") return;
  void ready();
}

export function playCheckFx(correct: boolean): void {
  playSfx(correct ? "right" : "wrong");
}

export function playNextFx(): void {
  playSfx("next");
}
