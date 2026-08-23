import { useEffect, useRef, useState } from "react";
import type { VocabItem } from "../types";
import { speakEnglish } from "../lib/speech";
import { lookupWord, splitAnswer, translateWord, type WordEntry } from "../lib/wordLookup";
import { useListen } from "../lib/useSpeech";
import { IconSpeaker } from "./Icons";

interface AnswerWordsProps {
  text: string;
  vocab: VocabItem[];
  compact?: boolean;
}

function ClickableEnglish({ text, className }: { text: string; className?: string }) {
  const [picked, setPicked] = useState<string | null>(null);
  const [zh, setZh] = useState("");

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

  return (
    <div className={`word-line ${className ?? ""}`}>
      <p>
        {splitAnswer(text).map((part, index) =>
          part.kind === "word" ? (
            <button
              key={`${part.value}-${index}`}
              type="button"
              className={`answer-word ${picked?.toLowerCase() === part.value.toLowerCase() ? "is-on" : ""}`}
              onClick={() => setPicked(part.value)}
            >
              {part.value}
            </button>
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

export function AnswerWords({ text, vocab, compact = false }: AnswerWordsProps) {
  const [picked, setPicked] = useState<string | null>(null);
  const [entry, setEntry] = useState<WordEntry | null>(null);
  const listen = useListen(entry?.speak ?? "");
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
    void lookupWord(picked, vocabRef.current).then((next) => {
      if (!alive) return;
      setEntry(next);
      void speakEnglish(next.speak);
    });
    return () => {
      alive = false;
    };
  }, [picked, vocabKey]);

  return (
    <div className={`answer-words ${compact ? "compact" : ""}`}>
      <p className={compact ? "en-answer compact" : "en-answer"}>
        {splitAnswer(text).map((part, index) =>
          part.kind === "word" ? (
            <button
              key={`${part.value}-${index}`}
              type="button"
              className={`answer-word ${picked?.toLowerCase() === part.value.toLowerCase() ? "is-on" : ""}`}
              onClick={() => {
                if (picked?.toLowerCase() === part.value.toLowerCase() && entry) {
                  void speakEnglish(entry.speak);
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
