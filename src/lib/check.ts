import type { SlotCheck } from "../types";

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

export function answerSlots(text: string): string[] {
  return text
    .replace(/[“”"‘’`]/g, "'")
    .split(/\s+/)
    .map((word) => word.replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, ""))
    .filter(Boolean);
}

export function emptySlots(target: string): string[] {
  return answerSlots(target).map(() => "");
}

export function checkSlots(values: string[], answers: string[]): SlotCheck {
  const primary = answerSlots(answers[0] ?? "");
  const joined = normalize(values.join(" "));
  const exact = answers.some((answer) => normalize(answer) === joined);

  if (exact && primary.length > 0) {
    return {
      correct: true,
      marks: primary.map(() => "ok"),
      wrongCount: 0,
    };
  }

  const marks = primary.map((word, index) =>
    normalize(values[index] ?? "") === normalize(word) ? "ok" : "wrong",
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
