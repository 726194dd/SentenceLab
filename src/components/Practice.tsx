import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { levelLabel, scenarioLabel } from "../data/catalog";
import { SCENE_ART } from "../data/scenes";
import { answerSlots, answersOf, checkSlots, emptySlots } from "../lib/check";
import { nextSentence } from "../lib/pool";
import { loadDoneIds, saveDoneIds } from "../lib/progress";
import { playCheckFx, playNextFx } from "../lib/fx";
import { localHint, lookupHint, withRoles, type WordHint } from "../lib/wordHint";
import { speakEnglish, stopSpeech } from "../lib/speech";
import { useListen } from "../lib/useSpeech";
import type { Sentence, SlotCheck } from "../types";
import type { useAccess } from "../lib/useAccess";
import { DrillList } from "./DrillList";
import { IconCheck, IconEye, IconRefresh, IconSpeaker } from "./Icons";
import { AnswerWords } from "./AnswerWords";
import { NotesPanel } from "./NotesPanel";
import { Paywall } from "./Paywall";
import { WordBlanks } from "./WordBlanks";

function ZhLine({ text }: { text: string }) {
  const boxRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const box = boxRef.current;
    const inner = textRef.current;
    if (!box || !inner) return;

    const fit = () => {
      inner.style.transform = "scale(1)";
      const scale = Math.min(
        1,
        box.clientWidth / Math.max(inner.scrollWidth, 1),
        box.clientHeight / Math.max(inner.scrollHeight, 1),
      );
      inner.style.transform = `scale(${scale})`;
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(box);
    return () => observer.disconnect();
  }, [text]);

  return (
    <h1 ref={boxRef} className="zh-line">
      <span ref={textRef} className="zh-line-fit">
        {text}
      </span>
    </h1>
  );
}

interface PracticeProps {
  pool: Sentence[];
  access: ReturnType<typeof useAccess>;
  onBack: () => void;
}

export function Practice({ pool, access, onBack }: PracticeProps) {
  const seed = pool[0];
  const [doneIds, setDoneIds] = useState(() =>
    seed ? loadDoneIds(seed.level, seed.scenario) : new Set<string>(),
  );
  const [sentence, setSentence] = useState<Sentence>(() => nextSentence(pool, undefined, doneIds)!);
  const [values, setValues] = useState(() => emptySlots(sentence.en));
  const [result, setResult] = useState<SlotCheck | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [shake, setShake] = useState(false);
  const [listenFirst, setListenFirst] = useState(false);
  const [hints, setHints] = useState<WordHint[] | undefined>();
  const holdEnter = useRef(false);
  const listen = useListen(sentence.en);
  const doneCount = Math.min(doneIds.size, pool.length);
  const progressPct = pool.length === 0 ? 0 : Math.round((doneCount / pool.length) * 100);

  const answers = useMemo(() => answersOf(sentence), [sentence]);
  const marks = result?.marks ?? values.map(() => "idle" as const);

  useEffect(() => {
    if (!listenFirst || access.expired) return;
    speakEnglish(sentence.en);
    return () => stopSpeech();
  }, [access.expired, listenFirst, sentence.id, sentence.en]);

  useEffect(() => {
    if (access.expired) stopSpeech();
  }, [access.expired]);

  useEffect(() => {
    const release = (event: KeyboardEvent) => {
      if (event.key === "Enter") holdEnter.current = false;
    };
    window.addEventListener("keyup", release);
    return () => window.removeEventListener("keyup", release);
  }, []);

  useEffect(() => {
    if (!result) {
      setHints(undefined);
      return;
    }
    const slots = answerSlots(sentence.en);
    const vocab = sentence.notes.vocab;
    setHints(withRoles(slots, slots.map((word) => localHint(word, vocab))));
    let alive = true;
    void Promise.all(slots.map((word) => lookupHint(word, vocab))).then((next) => {
      if (alive) setHints(withRoles(slots, next));
    });
    return () => {
      alive = false;
    };
  }, [result, sentence.en, sentence.notes.vocab]);

  const refresh = () => {
    if (access.expired) return;
    const next = nextSentence(pool, sentence.id, doneIds);
    if (!next) return;
    playNextFx();
    setSentence(next);
    setValues(emptySlots(next.en));
    setResult(null);
    setRevealed(false);
    setShake(false);
  };

  const markDone = (id: string) => {
    if (!seed || doneIds.has(id)) return;
    const next = new Set(doneIds);
    next.add(id);
    setDoneIds(next);
    saveDoneIds(seed.level, seed.scenario, next);
  };

  const check = (fromEnter = false) => {
    if (access.expired) return;
    if (result?.correct) {
      if (fromEnter && holdEnter.current) return;
      refresh();
      return;
    }
    const next = checkSlots(values, answers);
    setResult(next);
    playCheckFx(next.correct);
    if (next.correct) {
      if (fromEnter) holdEnter.current = true;
      setShake(false);
      markDone(sentence.id);
      return;
    }
    setShake(false);
    requestAnimationFrame(() => setShake(true));
  };

  return (
    <div className={`practice-page ${revealed ? "" : "stage"}`}>
      <div className="scene-backdrop" aria-hidden>
        <img src={SCENE_ART[sentence.scenario]} alt="" decoding="async" fetchPriority="high" />
      </div>
      <div className="toolbar">
        <div className="crumbs">
          <button type="button" className="btn btn-ghost" onClick={onBack}>
            返回分类
          </button>
          <span className="chip">{levelLabel(sentence.level)}</span>
          <span className="chip">{scenarioLabel(sentence.scenario)}</span>
          <span className="chip">本类 {pool.length} 句</span>
          {!access.unlocked && !access.expired ? (
            <span className="chip trial-clock">{access.clock}</span>
          ) : null}
        </div>
        <label className="toggle">
          <span className="toggle-text">先听读音</span>
          <span className="switch">
            <input
              type="checkbox"
              checked={listenFirst}
              onChange={(event) => setListenFirst(event.target.checked)}
            />
            <span className="switch-ui" aria-hidden />
          </span>
        </label>
      </div>

      <div className={`app-shell ${revealed ? "" : "stage"}`}>
      <div
        className="category-progress"
        aria-label={`本类进度 ${doneCount} / ${pool.length}`}
      >
        <div className="category-progress-label">
          进度 {doneCount} / {pool.length}
        </div>
        <div className="category-progress-track">
          <div className="category-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
      </div>
      <section className="panel prompt-card">
        <ZhLine text={sentence.zh} />
        <div className="action-row">
          <button
            type="button"
            className="btn btn-soft"
            disabled={listen.disabled || access.expired}
            onClick={listen.toggle}
          >
            <IconSpeaker />
            {listen.label}
          </button>
          <button type="button" className="btn btn-ghost" disabled={access.expired} onClick={refresh}>
            <IconRefresh />
            Next
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            disabled={access.expired}
            onClick={() => setRevealed(true)}
          >
            <IconEye />
            Answer
          </button>
        </div>
        <WordBlanks
          key={sentence.id}
          target={sentence.en}
          values={values}
          marks={marks}
          shake={shake}
          autoFocus
          isCorrect={result?.correct === true}
          hints={hints}
          onChange={(next) => {
            setValues(next);
            setResult(null);
            setShake(false);
          }}
          onSubmit={() => check(true)}
        />
        <div className="action-row">
          <button type="button" className="btn btn-primary" disabled={access.expired} onClick={() => check(false)}>
            <IconCheck />
            Check
          </button>
        </div>
        {revealed ? (
          <div className="answer-reveal">
            <div className="brand-kicker">参考答案</div>
            <AnswerWords text={sentence.en} vocab={sentence.notes.vocab} />
            {sentence.alts?.map((alt) => (
              <div className="answer-alt" key={alt}>
                <span className="hint-line">也可接受</span>
                <AnswerWords text={alt} vocab={sentence.notes.vocab} compact />
              </div>
            ))}
          </div>
        ) : null}
      </section>

      {revealed ? (
        <>
          <NotesPanel sentence={sentence} />
          <div className="panel" style={{ marginTop: 18 }}>
            <DrillList drills={sentence.drills} />
          </div>
        </>
      ) : null}
      </div>
      {access.expired ? <Paywall onUnlock={access.unlock} /> : null}
    </div>
  );
}
