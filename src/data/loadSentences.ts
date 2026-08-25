import type { EnLevel, LanguageId, Level, Scenario, Sentence } from "../types";
import { SCENARIOS } from "./catalog";

const JA_SCENARIO_COUNT = 50;

const EN_SCENARIO_COUNT: Record<EnLevel, number> = {
  A1: 100,
  A2: 100,
  B1: 100,
  B2: 100,
  C1: 100,
};

export function scenarioPoolCount(lang: LanguageId, level: Level, _scenario: Scenario): number {
  if (lang === "ja") return JA_SCENARIO_COUNT;
  return EN_SCENARIO_COUNT[level as EnLevel];
}

export function levelProgressTotals(lang: LanguageId, level: Level): Record<Scenario, number> {
  const count =
    lang === "ja" ? JA_SCENARIO_COUNT : EN_SCENARIO_COUNT[level as EnLevel];
  return Object.fromEntries(SCENARIOS.map((item) => [item.id, count])) as Record<Scenario, number>;
}

let enPromise: Promise<Sentence[]> | null = null;
let jaPromise: Promise<Sentence[]> | null = null;

export function loadSentences(lang: LanguageId): Promise<Sentence[]> {
  if (lang === "ja") {
    jaPromise ??= import("./ja/sentences").then((mod) => mod.JA_SENTENCES);
    return jaPromise;
  }
  enPromise ??= import("./sentences-en").then((mod) => mod.EN_SENTENCES);
  return enPromise;
}

export function preloadSentences(lang: LanguageId): void {
  void loadSentences(lang);
}
