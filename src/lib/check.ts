import type { SlotCheck } from "../types";
import type { LanguageId } from "../types";

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[“”"‘’`]/g, "'")
    .replace(/[^a-z0-9'\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

export function normalize(text: string): string {
  return tokenize(text).join(" ");
}

export function answerSlots(text: string, preset?: string[]): string[] {
  if (preset?.length) return preset;
  return text
    .replace(/[“”"‘’`]/g, "'")
    .split(/\s+/)
    .map((word) => word.replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, ""))
    .filter(Boolean);
}

export function emptySlots(target: string, preset?: string[]): string[] {
  return answerSlots(target, preset).map(() => "");
}

function slotMatch(given: string, expected: string, lang: LanguageId): boolean {
  if (lang === "ja") return given.trim() === expected.trim();
  return normalize(given) === normalize(expected);
}

export function checkSlots(
  values: string[],
  answers: string[],
  preset?: string[],
  lang: LanguageId = "en",
): SlotCheck {
  const primary = answerSlots(answers[0] ?? "", preset);
  const joined = lang === "ja" ? values.map((v) => v.trim()).join("") : normalize(values.join(" "));
  const exact = answers.some((answer) => {
    const slots = answerSlots(answer, preset);
    if (lang === "ja") return slots.map((s, i) => slotMatch(values[i] ?? "", s, lang)).every(Boolean) && slots.length > 0;
    return normalize(answer) === joined;
  });

  if (exact && primary.length > 0) {
    return {
      correct: true,
      marks: primary.map(() => "ok"),
      wrongCount: 0,
    };
  }

  const marks = primary.map((word, index) =>
    slotMatch(values[index] ?? "", word, lang) ? "ok" : "wrong",
  );
  const wrongCount = marks.filter((mark) => mark === "wrong").length;

  return {
    correct: wrongCount === 0 && primary.length > 0,
    marks,
    wrongCount,
  };
}

export function answersOf(sentence: { en: string; alts?: string[] }): string[] {
  return [sentence.en, ...(sentence.alts ?? [])];
}

export function sentenceSlots(sentence: { en: string; slots?: string[] }): string[] | undefined {
  return sentence.slots;
}
