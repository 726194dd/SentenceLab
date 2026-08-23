import type { Level, Scenario, Sentence } from "../../types";
import { packGroups, type SentenceGroup } from "../build";

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

export type LevelPack = Record<Scenario, SentenceGroup[]>;

export function loadLevel(level: Level, pack: LevelPack): Sentence[] {
  return SCENARIO_ORDER.flatMap((scenario) => packGroups(level, scenario, pack[scenario]));
}
