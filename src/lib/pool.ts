import type { Level, Scenario, Sentence } from "../types";

export function filterSentences(
  all: Sentence[],
  level: Level,
  scenario: Scenario,
): Sentence[] {
  return all.filter((item) => item.level === level && item.scenario === scenario);
}

export function nextSentence(
  pool: Sentence[],
  currentId?: string,
  doneIds?: Set<string>,
): Sentence | undefined {
  if (pool.length === 0) return undefined;
  if (pool.length === 1) return pool[0];

  const unused = pool.filter((item) => item.id !== currentId && !doneIds?.has(item.id));
  const others = unused.length > 0 ? unused : pool.filter((item) => item.id !== currentId);
  return others[Math.floor(Math.random() * others.length)];
}
