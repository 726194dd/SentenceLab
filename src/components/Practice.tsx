import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { scenarioLabel } from "../data/catalog";
import { answerSlots, answersOf, checkSlots, emptySlots, sentenceSlots } from "../lib/check";
import { nextSentence } from "../lib/pool";
import { loadFavoriteIds, toggleFavorite } from "../lib/favorites";
import { loadCheckStats, loadDoneIds, saveCheckStats, saveDoneIds } from "../lib/progress";
import { playCheckFx, playNextFx, unlockFx } from "../lib/fx";
import { localHint, lookupHint, withRoles, type WordHint } from "../lib/wordHint";
import { speakTarget, stopSpeech } from "../lib/speech";
import { useListen } from "../lib/useSpeech";
import type { LanguageId, Sentence, SlotCheck } from "../types";
import { DrillList } from "./DrillList";
import { IconArrowLeft, IconCheck, IconEye, IconRefresh, IconSpeaker, IconStar } from "./Icons";
import { AnswerWords } from "./AnswerWords";
import { NotesPanel } from "./NotesPanel";
import { ConfettiBurst } from "./ConfettiBurst";
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

    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        fit();
      });
    };

    schedule();
    const observer = new ResizeObserver(schedule);
    observer.observe(box);
    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
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
  language: LanguageId;
  startId?: string;
  storageLevel?: string;
  storageScenario?: string;
  onBack: () => void;
}

export function Practice({
  pool,
  language,
  startId,
  storageLevel,
  storageScenario,
  onBack,
}: PracticeProps) {
  const seed = pool[0];
  const storeLevel = storageLevel ?? seed?.level ?? (language === "ja" ? "N5" : "A1");
  const storeScenario = storageScenario ?? seed?.scenario ?? "daily";
  const [doneIds, setDoneIds] = useState(() => loadDoneIds(language, storeLevel, storeScenario));
  const [saved, setSaved] = useState(() => loadFavoriteIds(language));
  const [sentence, setSentence] = useState<Sentence>(
    () => pool.find((item) => item.id === startId) ?? nextSentence(pool, undefined, doneIds)!,
  );
  const slots = sentenceSlots(sentence);
  const [values, setValues] = useState(() => emptySlots(sentence.en, slots));
  const [result, setResult] = useState<SlotCheck | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [shake, setShake] = useState(false);
  const [listenFirst, setListenFirst] = useState(true);
  const [hints, setHints] = useState<WordHint[] | undefined>();
  const [burst, setBurst] = useState(0);
  const [stats, setStats] = useState(() => loadCheckStats(language, storeLevel, storeScenario));
  const holdEnter = useRef(false);
  const listen = useListen(sentence.en, language);
  const doneCount = Math.min(doneIds.size, pool.length);
  const questionNo = Math.min(pool.length, doneIds.has(sentence.id) ? doneCount : doneCount + 1);
  const attempted = stats.correct + stats.wrong;
  const accuracy = attempted === 0 ? 0 : Math.round((stats.correct / attempted) * 100);

  const answers = useMemo(() => answersOf(sentence), [sentence]);
  const marks = result?.marks ?? values.map(() => "idle" as const);

  useEffect(() => {
    if (!listenFirst) return;
    speakTarget(sentence.en, language);
    return () => stopSpeech();
  }, [language, listenFirst, sentence.id, sentence.en]);

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
    const slotWords = answerSlots(sentence.en, slots);
    const vocab = sentence.notes.vocab;
    const baseHints = slotWords.map((word) => localHint(word, vocab, language));
    setHints(language === "ja" ? baseHints : withRoles(slotWords, baseHints));
    let alive = true;
    void Promise.all(slotWords.map((word) => lookupHint(word, vocab, language))).then((next) => {
      if (alive) setHints(withRoles(slotWords, next));
    });
    return () => {
      alive = false;
    };
  }, [language, result, sentence.en, sentence.notes.vocab, slots]);

  const refresh = () => {
    const next = nextSentence(pool, sentence.id, doneIds);
    if (!next) return;
    unlockFx();
    playNextFx();
    setSentence(next);
    setValues(emptySlots(next.en, sentenceSlots(next)));
    setResult(null);
    setRevealed(false);
    setShake(false);
  };

  const markDone = (id: string) => {
    if (doneIds.has(id)) return;
    const next = new Set(doneIds);
    next.add(id);
    setDoneIds(next);
    saveDoneIds(language, storeLevel, storeScenario, next);
  };

  const check = (fromEnter = false) => {
    if (result?.correct) {
      if (fromEnter && holdEnter.current) return;
      refresh();
      return;
    }
    const next = checkSlots(values, answers, slots, language);
    if (!result) {
      const counted = next.correct
        ? { correct: stats.correct + 1, wrong: stats.wrong }
        : { correct: stats.correct, wrong: stats.wrong + 1 };
      setStats(counted);
      saveCheckStats(language, storeLevel, storeScenario, counted);
    }
    setResult(next);
    unlockFx();
    playCheckFx(next.correct);
    if (next.correct) {
      if (fromEnter) holdEnter.current = true;
      setShake(false);
      setBurst((n) => n + 1);
      markDone(sentence.id);
      return;
    }
    setShake(false);
    requestAnimationFrame(() => setShake(true));
  };

  return (
    <div className={`practice-page ${revealed ? "" : "stage"}`}>
      <ConfettiBurst token={burst} />
      <div className="toolbar">
        <div className="crumbs">
          <div className="crumbs-leading">
            <button
              type="button"
              className="crumbs-back"
              aria-label="返回分类"
              onClick={onBack}
            >
              <IconArrowLeft />
            </button>
            <span className="chip chip-level" aria-label={`水平 ${sentence.level}`}>
              {sentence.level}
            </span>
            <span className="chip">{scenarioLabel(sentence.scenario)}</span>
            <span className="chip">{questionNo}/{pool.length}题</span>
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
          onClick={() => setSaved(toggleFavorite(language, sentence.id))}
        >
          <IconStar filled={saved.has(sentence.id)} />
        </button>
        <ZhLine text={sentence.zh} />
        <div className="action-row tools">
          <button
            type="button"
            className="btn btn-soft"
            data-no-click-fx="true"
            disabled={listen.disabled}
            onClick={listen.toggle}
          >
            <IconSpeaker />
            {listen.label}
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            data-no-click-fx="true"
            onClick={refresh}
          >
            <IconRefresh />
            Next
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => setRevealed(true)}
          >
            <IconEye />
            Answer
          </button>
        </div>
        <WordBlanks
          key={sentence.id}
          target={sentence.en}
          slotSegments={slots}
          lang={language}
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
          <button
            type="button"
            className="btn btn-primary"
            data-no-click-fx="true"
            onClick={() => check(false)}
          >
            <IconCheck />
            Check
          </button>
        </div>
        {revealed ? (
          <div className="answer-reveal">
            <div className="brand-kicker">参考答案</div>
            <AnswerWords text={sentence.en} vocab={sentence.notes.vocab} lang={language} slots={slots} />
            {sentence.alts?.map((alt) => (
              <div className="answer-alt" key={alt}>
                <span className="hint-line">也可接受</span>
                <AnswerWords text={alt} vocab={sentence.notes.vocab} lang={language} compact />
              </div>
            ))}
          </div>
        ) : null}
      </section>

      {revealed ? (
        <>
          <NotesPanel sentence={sentence} />
          <div className="panel" style={{ marginTop: 18 }}>
            <DrillList drills={sentence.drills} lang={language} />
          </div>
        </>
      ) : null}
      </div>
    </div>
  );
}
