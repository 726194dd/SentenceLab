import type { Drill, Level, Scenario, Sentence } from "../types";

type DrillTuple = [focus: string, zh: string, en: string, hint: string, alts?: string[]];

export type GroupItem = {
  zh: string;
  en: string;
  alts?: string[];
  vocab: string[][];
  tips?: string;
};

export type SentenceGroup = {
  structure: string;
  grammar: string[];
  tips: string;
  items: GroupItem[];
};

export function s(
  id: string,
  level: Level,
  scenario: Scenario,
  zh: string,
  en: string,
  notes: Sentence["notes"],
  drills: DrillTuple[],
  alts: string[] = [],
): Sentence {
  return {
    id,
    level,
    scenario,
    zh,
    en,
    alts: alts.length ? alts : undefined,
    notes,
    drills: drills.map(
      ([focus, drillZh, drillEn, hint, drillAlts], index): Drill => ({
        id: `${id}-d${index + 1}`,
        focus,
        zh: drillZh,
        en: drillEn,
        hint,
        alts: drillAlts,
      }),
    ),
  };
}

export function packGroups(
  level: Level,
  scenario: Scenario,
  groups: SentenceGroup[],
  startAt = 5,
): Sentence[] {
  const sentences: Sentence[] = [];
  let n = startAt;

  for (const group of groups) {
    for (let i = 0; i < group.items.length; i += 1) {
      const item = group.items[i];
      const others = group.items.filter((_, index) => index !== i);
      const first = others[0] ?? item;
      const second = others[1] ?? others[0] ?? item;
      const focusA = group.grammar[0] ?? group.structure;
      const focusB = group.grammar[1] ?? focusA;

      sentences.push(
        s(
          `${level.toLowerCase()}-${scenario}-${n}`,
          level,
          scenario,
          item.zh,
          item.en,
          {
            structure: group.structure,
            grammar: group.grammar,
            vocab: item.vocab.map(([word, meaning]) => ({
              word: word ?? "",
              meaning: meaning ?? "",
            })),
            tips: item.tips ?? group.tips,
          },
          [
            [focusA, first.zh, first.en, focusA, first.alts],
            [focusB, second.zh, second.en, focusB, second.alts],
          ],
          item.alts ?? [],
        ),
      );
      n += 1;
    }
  }

  return sentences;
}
