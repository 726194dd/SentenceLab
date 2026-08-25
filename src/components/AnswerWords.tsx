import { useEffect, useRef, useState } from "react";
import type { LanguageId, VocabItem } from "../types";
import { speakTarget } from "../lib/speech";
import { lookupWord, splitAnswer, translateWord, type WordEntry } from "../lib/wordLookup";
import { useListen } from "../lib/useSpeech";
import { IconSpeaker } from "./Icons";

interface AnswerWordsProps {
  text: string;
  vocab: VocabItem[];
  lang?: LanguageId;
  slots?: string[];
  compact?: boolean;
}

function ClickableEnglish({ text, className }: { text: string; className?: string }) {
  const [picked, setPicked] = useState<string | null>(null);
  const [zh, setZh] = useState("");
  const usedSelect = useRef(false);

  useEffect(() => {
    if (!picked) return;
    let alive = true;
    setZh("");
    void translateWord(picked).then((next) => {
      if (alive) setZh(next);
    });
    return () => {
      alive = false;
    };
  }, [picked]);

  const takeSelection = (root: HTMLElement) => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) return "";
    const range = sel.getRangeAt(0);
    if (!root.contains(range.commonAncestorContainer)) return "";
    return sel.toString().replace(/\s+/g, " ").trim();
  };

  return (
    <div className={`word-line ${className ?? ""}`}>
      <p
        onPointerUp={(event) => {
          const selected = takeSelection(event.currentTarget);
          if (!selected) return;
          usedSelect.current = true;
          setPicked(selected);
        }}
      >
        {splitAnswer(text).map((part, index) =>
          part.kind === "word" ? (
            <span
              key={`${part.value}-${index}`}
              role="button"
              tabIndex={0}
              className={`answer-word ${picked?.toLowerCase() === part.value.toLowerCase() ? "is-on" : ""}`}
              onClick={() => {
                if (usedSelect.current) {
                  usedSelect.current = false;
                  return;
                }
                setPicked(part.value);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setPicked(part.value);
                }
              }}
            >
              {part.value}
            </span>
          ) : (
            <span key={`${part.value}-${index}`}>{part.value}</span>
          ),
        )}
      </p>
      {picked ? (
        <p className="word-gloss">
          <b>{picked}</b>
          <span>{zh || "…"}</span>
        </p>
      ) : null}
    </div>
  );
}

export function AnswerWords({ text, vocab, lang = "en", slots, compact = false }: AnswerWordsProps) {
  const [picked, setPicked] = useState<string | null>(null);
  const [entry, setEntry] = useState<WordEntry | null>(null);
  const listen = useListen(entry?.speak ?? "", lang);
  const vocabRef = useRef(vocab);
  vocabRef.current = vocab;
  const vocabKey = vocab.map((item) => `${item.word}:${item.meaning}`).join("|");

  useEffect(() => {
    setPicked(null);
    setEntry(null);
  }, [text]);

  useEffect(() => {
    if (!picked) return;
    let alive = true;
    void lookupWord(picked, vocabRef.current, lang).then((next) => {
      if (!alive) return;
      setEntry(next);
      void speakTarget(next.speak, lang);
    });
    return () => {
      alive = false;
    };
  }, [lang, picked, vocabKey]);

  const parts =
    lang === "ja" && slots?.length
      ? slots.map((value) => ({ kind: "word" as const, value }))
      : splitAnswer(text);

  return (
    <div className={`answer-words ${compact ? "compact" : ""}`}>
      <p className={compact ? "en-answer compact" : "en-answer"}>
        {parts.map((part, index) =>
          part.kind === "word" ? (
            <button
              key={`${part.value}-${index}`}
              type="button"
              className={`answer-word ${picked === part.value ? "is-on" : ""}`}
              onClick={() => {
                if (picked === part.value && entry) {
                  void speakTarget(entry.speak, lang);
                  return;
                }
                setPicked(part.value);
              }}
            >
              {part.value}
            </button>
          ) : (
            <span key={`${part.value}-${index}`}>{part.value}</span>
          ),
        )}
      </p>
      {entry ? (
        <div className="word-card">
          <div className="word-card-head">
            <strong>{entry.word}</strong>
            {entry.phonetic ? <span className="word-phonetic">{entry.phonetic}</span> : null}
            <button type="button" className="btn btn-soft" disabled={listen.disabled} onClick={listen.toggle}>
              <IconSpeaker />
              {listen.label}
            </button>
          </div>
          {entry.zh ? <p className="word-zh">{entry.zh}</p> : null}
          {entry.phrase ? (
            <p className="word-phrase">
              {entry.phrase}
              {entry.zh ? ` · ${entry.zh}` : ""}
            </p>
          ) : null}
          {entry.senses.map((sense) => (
            <div className="word-sense" key={`${sense.pos}-${sense.meaning}`}>
              {sense.pos ? <span className="word-pos">{sense.pos}</span> : null}
              <ClickableEnglish text={sense.meaning} />
              {sense.example ? <ClickableEnglish text={sense.example} className="word-example" /> : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
