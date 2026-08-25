import type { Drill, JaLevel, Scenario, Sentence } from "../../types";

type JaDrillTuple = [focus: string, zh: string, target: string, slots: string[], hint: string, alts?: string[]];

export type JaGroupItem = {
  zh: string;
  target: string;
  slots: string[];
  vocab: string[][];
  tips?: string;
  alts?: string[];
  altSlots?: string[][];
};

export type JaSentenceGroup = {
  structure: string;
  grammar: string[];
  tips: string;
  items: JaGroupItem[];
};

export function jaS(
  id: string,
  level: JaLevel,
  scenario: Scenario,
  zh: string,
  target: string,
  slots: string[],
  notes: Sentence["notes"],
  drills: JaDrillTuple[],
  alts: string[] = [],
  _altSlots: string[][] = [],
): Sentence {
  return {
    id: `ja-${id}`,
    lang: "ja",
    level,
    scenario,
    zh,
    en: target,
    slots,
    alts: alts.length ? alts : undefined,
    notes,
    drills: drills.map(
      ([focus, drillZh, drillTarget, drillSlots, hint, drillAlts], index): Drill => ({
        id: `ja-${id}-d${index + 1}`,
        focus,
        zh: drillZh,
        en: drillTarget,
        slots: drillSlots,
        hint,
        alts: drillAlts,
      }),
    ),
  };
}

export function packJaGroups(
  level: JaLevel,
  scenario: Scenario,
  groups: JaSentenceGroup[],
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
        jaS(
          `${level.toLowerCase()}-${scenario}-${n}`,
          level,
          scenario,
          item.zh,
          item.target,
          item.slots,
          {
            structure: group.structure,
            grammar: group.grammar,
            vocab: item.vocab.map(([word, meaning]) => ({ word: word ?? "", meaning: meaning ?? "" })),
            tips: item.tips ?? group.tips,
          },
          [
            [focusA, first.zh, first.target, first.slots, focusA, first.alts],
            [focusB, second.zh, second.target, second.slots, focusB, second.alts],
          ],
          item.alts ?? [],
          item.altSlots ?? [],
        ),
      );
      n += 1;
    }
  }

  return sentences;
}
