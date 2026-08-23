import { LICENSE_URL, TRIAL_MS } from "../config/access";

const STARTED_KEY = "sentence-lab.trialStartedAt";
const UNLOCKED_KEY = "sentence-lab.unlocked";

export function isUnlocked(): boolean {
  try {
    return localStorage.getItem(UNLOCKED_KEY) === "1";
  } catch {
    return false;
  }
}

export function unlockLocal(): void {
  localStorage.setItem(UNLOCKED_KEY, "1");
}

export function startTrialIfNeeded(): void {
  if (isUnlocked()) return;
  if (localStorage.getItem(STARTED_KEY)) return;
  localStorage.setItem(STARTED_KEY, String(Date.now()));
}

export function trialStartedAt(): number | null {
  const raw = localStorage.getItem(STARTED_KEY);
  if (!raw) return null;
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
}

export function remainingMs(now = Date.now()): number {
  if (isUnlocked()) return TRIAL_MS;
  const started = trialStartedAt();
  if (started === null) return TRIAL_MS;
  return Math.max(0, TRIAL_MS - (now - started));
}

export function isTrialExpired(now = Date.now()): boolean {
  return !isUnlocked() && trialStartedAt() !== null && remainingMs(now) <= 0;
}

export function formatRemain(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export async function confirmUnlockRemote(code: string): Promise<boolean> {
  if (!LICENSE_URL || !code.trim()) return false;
  const url = new URL(LICENSE_URL);
  url.searchParams.set("code", code.trim());
  const response = await fetch(url);
  if (!response.ok) return false;
  const data = (await response.json()) as { ok?: boolean };
  return data.ok === true;
}

export function consumeUnlockFromLocation(search = window.location.search): boolean {
  const params = new URLSearchParams(search);
  if (params.get("unlocked") === "1" || params.get("unlock") === "1") {
    unlockLocal();
    params.delete("unlocked");
    params.delete("unlock");
    const next = `${window.location.pathname}${params.toString() ? `?${params}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", next);
    return true;
  }
  return false;
}
