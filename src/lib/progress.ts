const prefix = "sentence-lab.done";

export function progressKey(level: string, scenario: string): string {
  return `${prefix}.${level}.${scenario}`;
}

export function loadDoneIds(level: string, scenario: string): Set<string> {
  try {
    const raw = localStorage.getItem(progressKey(level, scenario));
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((id): id is string => typeof id === "string"));
  } catch {
    return new Set();
  }
}

export function saveDoneIds(level: string, scenario: string, ids: Set<string>): void {
  localStorage.setItem(progressKey(level, scenario), JSON.stringify([...ids]));
}
