export type Level = "A1" | "A2" | "B1" | "B2" | "C1";
export type Scenario =
  | "daily"
  | "travel"
  | "work"
  | "study"
  | "social"
  | "shopping"
  | "dining"
  | "health";

export interface VocabItem {
  word: string;
  meaning: string;
}

export interface Drill {
  id: string;
  focus: string;
  zh: string;
  en: string;
  hint: string;
  alts?: string[];
}

export interface Sentence {
  id: string;
  level: Level;
  scenario: Scenario;
  zh: string;
  en: string;
  alts?: string[];
  notes: {
    structure: string;
    grammar: string[];
    vocab: VocabItem[];
    tips: string;
  };
  drills: Drill[];
}

export type SlotMark = "idle" | "ok" | "wrong";

export interface SlotCheck {
  correct: boolean;
  marks: SlotMark[];
  wrongCount: number;
}
