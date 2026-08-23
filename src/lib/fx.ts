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

let player: HTMLAudioElement | null = null;
let unlocked = false;

function playSfx(name: Sfx, stopVoice = true): void {
  if (stopVoice) stopSpeech();
  if (!player) player = new Audio();
  player.pause();
  player.currentTime = 0;
  player.src = urls[name];
  player.volume = 1;
  const attempt = player.play();
  if (attempt) void attempt.catch(() => {});
}

export function unlockFx(): void {
  if (unlocked || typeof window === "undefined") return;
  unlocked = true;
  if (!player) player = new Audio();
  player.src = urls.right;
  player.volume = 0;
  void player.play().then(() => {
    player?.pause();
    if (player) {
      player.currentTime = 0;
      player.volume = 1;
    }
  }).catch(() => {
    unlocked = false;
    if (player) player.volume = 1;
  });
}

export function playCheckFx(correct: boolean): void {
  playSfx(correct ? "right" : "wrong");
}

export function playNextFx(): void {
  playSfx("next");
}
