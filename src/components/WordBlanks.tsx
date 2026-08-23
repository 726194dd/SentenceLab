import { useRef } from "react";
import { answerSlots } from "../lib/check";
import type { SlotMark } from "../types";

interface WordBlanksProps {
  target: string;
  values: string[];
  marks: SlotMark[];
  autoFocus?: boolean;
  compact?: boolean;
  shake?: boolean;
  isCorrect?: boolean;
  onChange: (values: string[]) => void;
  onSubmit: () => void;
}

export function WordBlanks({
  target,
  values,
  marks,
  autoFocus = false,
  compact = false,
  shake = false,
  isCorrect = false,
  onChange,
  onSubmit,
}: WordBlanksProps) {
  const slots = answerSlots(target);
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const focusAt = (index: number) => {
    const next = Math.max(0, Math.min(index, slots.length - 1));
    refs.current[next]?.focus();
  };

  const writeAt = (index: number, nextValue: string) => {
    const next = values.map((value, current) => (current === index ? nextValue : value));
    onChange(next);
  };

  return (
    <div
      className={`word-blanks ${compact ? "compact" : ""} ${shake ? "is-shake" : ""}`}
      role="group"
      aria-label="按词填写英文"
    >
      {slots.map((word, index) => {
        const mark = marks[index] ?? "idle";
        const typed = values[index] ?? "";
        const measure = typed.length > word.length ? typed : word;
        return (
          <label key={`${word}-${index}`} className={`word-blank ${mark}`}>
            <span className="word-blank-measure" aria-hidden>
              {measure}
            </span>
            <span className="sr-only">第 {index + 1} 个词</span>
            <input
              ref={(node) => {
                refs.current[index] = node;
              }}
              value={values[index] ?? ""}
              autoFocus={autoFocus && index === 0}
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              aria-invalid={mark === "wrong"}
              onChange={(event) => writeAt(index, event.target.value.replace(/\s+/g, ""))}
              onPaste={(event) => {
                const pasted = event.clipboardData.getData("text");
                const words = answerSlots(pasted);
                if (words.length <= 1) return;
                event.preventDefault();
                const next = [...values];
                words.forEach((item, offset) => {
                  if (index + offset < next.length) next[index + offset] = item;
                });
                onChange(next);
                focusAt(index + words.length - 1);
              }}
              onKeyDown={(event) => {
                const cursor = event.currentTarget.selectionStart ?? 0;
                const end = event.currentTarget.value.length;

                if (event.key === "Enter" && event.repeat) {
                  event.preventDefault();
                  return;
                }

                if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
                  event.preventDefault();
                  onSubmit();
                  return;
                }

                if (event.key === "Enter") {
                  event.preventDefault();
                  if (isCorrect || index === slots.length - 1) {
                    onSubmit();
                    return;
                  }
                  focusAt(index + 1);
                  return;
                }

                if (event.key === " ") {
                  event.preventDefault();
                  focusAt(index + 1);
                  return;
                }

                if (event.key === "Backspace" && !values[index] && index > 0) {
                  event.preventDefault();
                  focusAt(index - 1);
                  return;
                }

                if (event.key === "ArrowLeft" && cursor === 0 && index > 0) {
                  event.preventDefault();
                  focusAt(index - 1);
                  return;
                }

                if (event.key === "ArrowRight" && cursor === end && index < slots.length - 1) {
                  event.preventDefault();
                  focusAt(index + 1);
                }
              }}
            />
          </label>
        );
      })}
    </div>
  );
}
