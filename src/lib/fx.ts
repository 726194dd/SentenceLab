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

const players: Partial<Record<Sfx, HTMLAudioElement>> = {};
let unlocked = false;
let rightPlaying = false;
let nextQueued = false;

function playerOf(name: Sfx): HTMLAudioElement {
  const existing = players[name];
  if (existing) return existing;
  const created = new Audio(urls[name]);
  created.preload = "auto";
  players[name] = created;
  return created;
}

function playNow(name: Sfx): void {
  const el = playerOf(name);
  el.pause();
  el.currentTime = 0;
  el.volume = 1;
  const attempt = el.play();
  if (attempt) void attempt.catch(() => {});
}

function finishRight(): void {
  rightPlaying = false;
  if (!nextQueued) return;
  nextQueued = false;
  playNow("next");
}

function playSfx(name: Sfx): void {
  stopSpeech();
  if (name === "right") {
    nextQueued = false;
    rightPlaying = true;
    const el = playerOf("right");
    el.onended = finishRight;
    playNow("right");
    return;
  }
  if (name === "next") {
    if (rightPlaying) {
      nextQueued = true;
      return;
    }
    playNow("next");
    return;
  }
  playNow("wrong");
}

export function unlockFx(): void {
  if (unlocked || typeof window === "undefined") return;
  unlocked = true;
  const probe = new Audio(urls.right);
  probe.volume = 0;
  void probe.play().then(() => {
    probe.pause();
    probe.currentTime = 0;
  }).catch(() => {
    unlocked = false;
  });
}

export function playCheckFx(correct: boolean): void {
  playSfx(correct ? "right" : "wrong");
}

export function playNextFx(): void {
  playSfx("next");
}
