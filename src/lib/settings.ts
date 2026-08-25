export interface AppSettings {
  clickFx: boolean;
  typeFx: boolean;
  clickFxVolume: number;
  typeFxVolume: number;
}

const KEY = "sentence-lab.settings";

/** Slider value that matches the original maximum loudness (100% scale). */
export const FX_VOLUME_MID = 50;

function clampVolume(value: unknown, fallback = FX_VOLUME_MID): number {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(0, Math.min(100, Math.round(n)));
}

const defaults = (): AppSettings => ({
  clickFx: true,
  typeFx: true,
  clickFxVolume: FX_VOLUME_MID,
  typeFxVolume: FX_VOLUME_MID,
});

let cache: AppSettings | null = null;
const listeners = new Set<(settings: AppSettings) => void>();

function normalizeStoredVolume(value: unknown): number {
  const n = clampVolume(value, FX_VOLUME_MID);
  // Earlier builds used slider 100 as full loudness; now 50 is full loudness.
  if (n === 100) return FX_VOLUME_MID;
  return n;
}

export function loadSettings(): AppSettings {
  if (cache) return cache;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<AppSettings>;
      cache = {
        clickFx: parsed.clickFx !== false,
        typeFx: parsed.typeFx !== false,
        clickFxVolume: normalizeStoredVolume(parsed.clickFxVolume),
        typeFxVolume: normalizeStoredVolume(parsed.typeFxVolume),
      };
      return cache;
    }
  } catch {
    // ignore corrupt storage
  }
  cache = defaults();
  return cache;
}

export function saveSettings(patch: Partial<AppSettings>): AppSettings {
  const current = loadSettings();
  const next: AppSettings = {
    ...current,
    ...patch,
    clickFxVolume: patch.clickFxVolume === undefined ? current.clickFxVolume : clampVolume(patch.clickFxVolume),
    typeFxVolume: patch.typeFxVolume === undefined ? current.typeFxVolume : clampVolume(patch.typeFxVolume),
  };
  cache = next;
  localStorage.setItem(KEY, JSON.stringify(next));
  listeners.forEach((listener) => listener(next));
  return next;
}

export function isClickFxEnabled(): boolean {
  return loadSettings().clickFx;
}

export function isTypeFxEnabled(): boolean {
  return loadSettings().typeFx;
}

export function fxVolumeScale(slider: number): number {
  return Math.max(0, slider / FX_VOLUME_MID);
}

export function clickFxVolumeScale(): number {
  return fxVolumeScale(loadSettings().clickFxVolume);
}

export function typeFxVolumeScale(): number {
  return fxVolumeScale(loadSettings().typeFxVolume);
}

export function subscribeSettings(listener: (settings: AppSettings) => void): () => void {
  listeners.add(listener);
  listener(loadSettings());
  return () => {
    listeners.delete(listener);
  };
}
