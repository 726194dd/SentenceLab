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

export function loadJaLevel(level: JaLevel, pack: JaLevelPack): Sentence[] {
  return SCENARIO_ORDER.flatMap((scenario) => packJaGroups(level, scenario, pack[scenario] ?? []));
}
