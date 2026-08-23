import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { levelLabel, scenarioLabel } from "../data/catalog";
import { SCENE_ART } from "../data/scenes";
import { answerSlots, answersOf, checkSlots, emptySlots } from "../lib/check";
import { nextSentence } from "../lib/pool";
import { loadFavoriteIds, toggleFavorite } from "../lib/favorites";
import { loadCheckStats, loadDoneIds, saveCheckStats, saveDoneIds } from "../lib/progress";
import { playCheckFx, playNextFx } from "../lib/fx";
import { localHint, lookupHint, withRoles, type WordHint } from "../lib/wordHint";
import { speakEnglish, stopSpeech } from "../lib/speech";
import { useListen } from "../lib/useSpeech";
import type { Sentence, SlotCheck } from "../types";
import type { useAccess } from "../lib/useAccess";
import { DrillList } from "./DrillList";
import { IconCheck, IconEye, IconRefresh, IconSpeaker, IconStar } from "./Icons";
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
      const styles = getComputedStyle(box);
      const availW =
        box.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
      const availH =
        box.clientHeight - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom);
      const scale = Math.min(
        1,
        availW / Math.max(inner.scrollWidth, 1),
        availH / Math.max(inner.scrollHeight, 1),
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
  startId?: string;
  storageLevel?: string;
  storageScenario?: string;
  onBack: () => void;
}

export function Practice({
  pool,
  access,
  startId,
  storageLevel,
  storageScenario,
  onBack,
}: PracticeProps) {
  const seed = pool[0];
  const storeLevel = storageLevel ?? seed?.level ?? "A1";
  const storeScenario = storageScenario ?? seed?.scenario ?? "daily";
  const [doneIds, setDoneIds] = useState(() => loadDoneIds(storeLevel, storeScenario));
  const [saved, setSaved] = useState(() => loadFavoriteIds());
  const [sentence, setSentence] = useState<Sentence>(
    () => pool.find((item) => item.id === startId) ?? nextSentence(pool, undefined, doneIds)!,
  );
  const [values, setValues] = useState(() => emptySlots(sentence.en));
  const [result, setResult] = useState<SlotCheck | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [shake, setShake] = useState(false);
  const [listenFirst, setListenFirst] = useState(false);
  const [hints, setHints] = useState<WordHint[] | undefined>();
  const [stats, setStats] = useState(() => loadCheckStats(storeLevel, storeScenario));
  const holdEnter = useRef(false);
  const listen = useListen(sentence.en);
  const doneCount = Math.min(doneIds.size, pool.length);
  const questionNo = Math.min(pool.length, doneIds.has(sentence.id) ? doneCount : doneCount + 1);
  const attempted = stats.correct + stats.wrong;
  const accuracy = attempted === 0 ? 0 : Math.round((stats.correct / attempted) * 100);

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
    if (doneIds.has(id)) return;
    const next = new Set(doneIds);
    next.add(id);
    setDoneIds(next);
    saveDoneIds(storeLevel, storeScenario, next);
  };

  const check = (fromEnter = false) => {
    if (access.expired) return;
    if (result?.correct) {
      if (fromEnter && holdEnter.current) return;
      refresh();
      return;
    }
    const next = checkSlots(values, answers);
    if (!result) {
      const counted = next.correct
        ? { correct: stats.correct + 1, wrong: stats.wrong }
        : { correct: stats.correct, wrong: stats.wrong + 1 };
      setStats(counted);
      saveCheckStats(storeLevel, storeScenario, counted);
    }
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
          <span className="chip">第 {questionNo} 题 / 共 {pool.length} 题</span>
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
      <div className="practice-stats" aria-label="答题统计">
        <span>已答对 {stats.correct}</span>
        <span>已答错 {stats.wrong}</span>
        <span>实时正确率 {accuracy}%</span>
      </div>
      <section className="panel prompt-card">
        <button
          type="button"
          className={`fav-btn ${saved.has(sentence.id) ? "is-on" : ""}`}
          aria-label={saved.has(sentence.id) ? "取消收藏" : "收藏"}
          aria-pressed={saved.has(sentence.id)}
          onClick={() => setSaved(toggleFavorite(sentence.id))}
        >
          <IconStar filled={saved.has(sentence.id)} />
        </button>
        <ZhLine text={sentence.zh} />
        <div className="action-row tools">
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
