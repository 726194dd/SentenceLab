import type { JaLevel, Scenario, Sentence } from "../../types";
import { packJaGroups, type JaSentenceGroup } from "./build";

export const SCENARIO_ORDER: Scenario[] = [
  "daily",
  "travel",
  "work",
  "study",
  "social",
  "shopping",
  "dining",
  "health",
];

export type JaLevelPack = Record<Scenario, JaSentenceGroup[]>;

export function loadJaLevel(level: JaLevel, pack: JaLevelPack, startAt = 5): Sentence[] {
  return SCENARIO_ORDER.flatMap((scenario) => packJaGroups(level, scenario, pack[scenario] ?? [], startAt));
}

export function loadJaLevelMerged(level: JaLevel, ...packs: JaLevelPack[]): Sentence[] {
  return SCENARIO_ORDER.flatMap((scenario) => {
    let startAt = 5;
    const sentences: Sentence[] = [];
    for (const pack of packs) {
      const groups = pack[scenario] ?? [];
      sentences.push(...packJaGroups(level, scenario, groups, startAt));
      startAt += groups.reduce((sum, group) => sum + group.items.length, 0);
    }
    return sentences;
  });
}
