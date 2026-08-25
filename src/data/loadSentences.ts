import type { EnLevel, JaLevel, LanguageId, Level, Scenario, Sentence } from "../types";
import { SCENARIOS } from "./catalog";

const JA_SCENARIO_COUNT = 50;

const EN_SCENARIO_COUNT: Record<EnLevel, number> = {
  A1: 100,
  A2: 100,
  B1: 100,
  B2: 100,
  C1: 100,
};

const JA_LEVELS: JaLevel[] = ["N5", "N4", "N3", "N2", "N1"];
const EN_LEVELS: EnLevel[] = ["A1", "A2", "B1", "B2", "C1"];

export function scenarioPoolCount(lang: LanguageId, level: Level, _scenario: Scenario): number {
  if (lang === "ja") return JA_SCENARIO_COUNT;
  return EN_SCENARIO_COUNT[level as EnLevel];
}

export function levelProgressTotals(lang: LanguageId, level: Level): Record<Scenario, number> {
  const count = lang === "ja" ? JA_SCENARIO_COUNT : EN_SCENARIO_COUNT[level as EnLevel];
  return Object.fromEntries(SCENARIOS.map((item) => [item.id, count])) as Record<Scenario, number>;
}

const levelCache = new Map<string, Promise<Sentence[]>>();

function cacheKey(lang: LanguageId, level: Level): string {
  return `${lang}:${level}`;
}

async function importLevel(lang: LanguageId, level: Level): Promise<Sentence[]> {
  if (lang === "ja") {
    const mod = await import(`./ja/level/${level}.ts`);
    return mod.LEVEL_SENTENCES as Sentence[];
  }
  const mod = await import(`./en/level/${level}.ts`);
  return mod.LEVEL_SENTENCES as Sentence[];
}

/** Load one level only — much faster on mobile than loading the whole language. */
export function loadLevelSentences(lang: LanguageId, level: Level): Promise<Sentence[]> {
  const key = cacheKey(lang, level);
  let pending = levelCache.get(key);
  if (!pending) {
    pending = importLevel(lang, level);
    levelCache.set(key, pending);
  }
  return pending;
}

/** All levels — used for favorites across levels. */
export function loadAllSentences(lang: LanguageId): Promise<Sentence[]> {
  const key = `${lang}:all`;
  let pending = levelCache.get(key);
  if (!pending) {
    const levels = lang === "ja" ? JA_LEVELS : EN_LEVELS;
    pending = Promise.all(levels.map((item) => loadLevelSentences(lang, item))).then((parts) =>
      parts.flat(),
    );
    levelCache.set(key, pending);
  }
  return pending;
}

export function preloadLevelSentences(lang: LanguageId, level: Level): void {
  void loadLevelSentences(lang, level);
}

/** @deprecated Use loadLevelSentences or loadAllSentences */
export function loadSentences(lang: LanguageId): Promise<Sentence[]> {
  return loadAllSentences(lang);
}

export function preloadSentences(lang: LanguageId): void {
  void loadAllSentences(lang);
}
