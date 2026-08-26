import { useLayoutEffect, useRef } from "react";
import { answerSlots } from "../lib/check";
import { playTypeFx } from "../lib/fx";
import { posTone, type WordHint } from "../lib/wordHint";
import type { LanguageId, SlotMark } from "../types";

function FitHint({ className, text }: { className: string; text: string }) {
  const boxRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const box = boxRef.current;
    const inner = textRef.current;
    if (!box || !inner) return;

    const fit = () => {
      inner.style.transform = "scale(1)";
      const avail = box.clientWidth;
      const need = inner.scrollWidth;
      inner.style.transform = `scale(${need > avail && need > 0 ? avail / need : 1})`;
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(box);
    return () => observer.disconnect();
  }, [text]);

  return (
    <span ref={boxRef} className={className}>
      <span ref={textRef} className="hint-fit">
        {text}
      </span>
    </span>
  );
}

interface WordBlanksProps {
  target: string;
  slotSegments?: string[];
  lang?: LanguageId;
  values: string[];
  marks: SlotMark[];
  autoFocus?: boolean;
  compact?: boolean;
  shake?: boolean;
  isCorrect?: boolean;
  hints?: WordHint[];
  onChange: (values: string[]) => void;
  onSubmit: () => void;
}

export function WordBlanks({
  target,
  slotSegments,
  lang = "en",
  values,
  marks,
  autoFocus = false,
  compact = false,
  shake = false,
  isCorrect = false,
  hints,
  onChange,
  onSubmit,
}: WordBlanksProps) {
  const slots = answerSlots(target, slotSegments);
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  const showHints = Boolean(hints && !compact);
  const fillLabel = lang === "ja" ? "按词块填写日语" : "按词填写英文";

  const distributeJaPaste = (pasted: string): string[] => {
    let cursor = 0;
    return slots.map((segment) => {
      const chunk = pasted.slice(cursor, cursor + segment.length);
      cursor += segment.length;
      return chunk;
    });
  };

  const focusAt = (index: number) => {
    const next = Math.max(0, Math.min(index, slots.length - 1));
    refs.current[next]?.focus();
  };

  const writeAt = (index: number, nextValue: string, playSound = false) => {
    if (playSound) playTypeFx();
    const next = values.map((value, current) => (current === index ? nextValue : value));
    onChange(next);
  };

  return (
    <div
      className={`word-blanks ${compact ? "compact" : ""} ${shake ? "is-shake" : ""} ${showHints ? "has-slots" : ""}`}
      role="group"
      aria-label={fillLabel}
    >
      {slots.map((word, index) => {
        const mark = marks[index] ?? "idle";
        const typed = values[index] ?? "";
        const measure = compact && typed.length > word.length ? typed : word;
        const hint = hints?.[index];
        return (
          <label key={`${word}-${index}`} className={`word-blank ${mark} ${showHints ? "is-hint" : ""}`}>
            {showHints ? (
              <span className={`word-pos-pill ${hint?.pos ? `pos-${posTone(hint.pos)}` : "is-empty"}`}>
                <span className="word-pos-label">{hint?.pos || "词"}</span>
              </span>
            ) : null}
            <span className="word-blank-body">
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
              onChange={(event) => {
                const raw = event.target.value;
                const nextValue = lang === "ja" ? raw.replace(/\s+/g, "") : raw.replace(/\s+/g, "");
                const prevValue = values[index] ?? "";
                writeAt(index, nextValue, nextValue.length > prevValue.length);
              }}
              onPaste={(event) => {
                const pasted = event.clipboardData.getData("text").trim();
                if (!pasted) return;
                if (lang === "ja" && slots.length > 1) {
                  event.preventDefault();
                  const next = distributeJaPaste(pasted.replace(/\s+/g, ""));
                  onChange(next);
                  focusAt(slots.length - 1);
                  return;
                }
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
            </span>
            {showHints ? <FitHint className="word-blank-ipa" text={hint?.phonetic || "\u00a0"} /> : null}
            {showHints ? <FitHint className="word-blank-zh" text={hint?.zh || "\u00a0"} /> : null}
          </label>
        );
      })}
    </div>
  );
}
