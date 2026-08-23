const prefix = "sentence-lab.done";
const statsPrefix = "sentence-lab.stats";

export interface CheckStats {
  correct: number;
  wrong: number;
}

export function progressKey(level: string, scenario: string): string {
  return `${prefix}.${level}.${scenario}`;
}

export function statsKey(level: string, scenario: string): string {
  return `${statsPrefix}.${level}.${scenario}`;
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

export function loadCheckStats(level: string, scenario: string): CheckStats {
  try {
    const raw = localStorage.getItem(statsKey(level, scenario));
    if (!raw) return { correct: 0, wrong: 0 };
    const parsed = JSON.parse(raw) as Partial<CheckStats>;
    const correct = Number(parsed.correct);
    const wrong = Number(parsed.wrong);
    return {
      correct: Number.isFinite(correct) && correct > 0 ? Math.floor(correct) : 0,
      wrong: Number.isFinite(wrong) && wrong > 0 ? Math.floor(wrong) : 0,
    };
  } catch {
    return { correct: 0, wrong: 0 };
  }
}

export function saveCheckStats(level: string, scenario: string, stats: CheckStats): void {
  localStorage.setItem(statsKey(level, scenario), JSON.stringify(stats));
}
