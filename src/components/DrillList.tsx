import { useState } from "react";
import type { Drill, LanguageId } from "../types";
import { answersOf, checkSlots, emptySlots } from "../lib/check";
import { playCheckFx, unlockFx } from "../lib/fx";
import { useListen } from "../lib/useSpeech";
import { ListenIcon } from "./Icons";
import { AnswerWords } from "./AnswerWords";
import { WordBlanks } from "./WordBlanks";

function DrillCard({ drill, lang }: { drill: Drill; lang: LanguageId }) {
  const preset = drill.slots;
  const [values, setValues] = useState(() => emptySlots(drill.en, preset));
  const [checked, setChecked] = useState(false);
  const [shake, setShake] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const listen = useListen(drill.en, lang);
  const result = checkSlots(values, answersOf(drill), preset, lang);
  const marks = checked ? result.marks : values.map(() => "idle" as const);

  const check = () => {
    const next = checkSlots(values, answersOf(drill), preset, lang);
    setChecked(true);
    unlockFx();
    playCheckFx(next.correct);
    if (next.correct) {
      setShake(false);
      return;
    }
    setShake(false);
    requestAnimationFrame(() => setShake(true));
  };

  return (
    <article className="drill-card">
      <span className="focus">{drill.focus}</span>
      <p className="zh-line drill-zh">{drill.zh}</p>
      <div className="action-row">
        <button
          type="button"
          className="btn btn-soft"
          disabled={listen.disabled}
          onClick={listen.toggle}
        >
          <ListenIcon loading={listen.loading} />
          {listen.label}
        </button>
      </div>
      <WordBlanks
        target={drill.en}
        slotSegments={preset}
        lang={lang}
        values={values}
        marks={marks}
        shake={shake}
        compact
        onChange={(next) => {
          setValues(next);
          setChecked(false);
          setShake(false);
        }}
        onSubmit={check}
      />
      <div className="action-row">
        <button type="button" className="btn btn-primary" onClick={check}>
          检查这句
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => setShowHint((prev) => !prev)}>
          {showHint ? "收起提示" : "看提示"}
        </button>
        <button type="button" className="btn btn-soft" onClick={() => setShowAnswer((prev) => !prev)}>
          {showAnswer ? "收起答案" : "显示答案"}
        </button>
      </div>
      {showHint ? <p className="hint-line">{drill.hint}</p> : null}
      {checked ? (
        <p className={`hint-line ${result.correct ? "ok-text" : "bad-text"}`}>
          {result.correct ? "这句已经正确。" : `还有 ${result.wrongCount} 个词是红的，改完再检查。`}
        </p>
      ) : null}
      {showAnswer ? (
        <AnswerWords text={drill.en} vocab={[]} lang={lang} slots={preset} compact />
      ) : null}
    </article>
  );
}

export function DrillList({ drills, lang }: { drills: Drill[]; lang: LanguageId }) {
  return (
    <section className="drills">
      <h2>根据难点展开练习</h2>
      <p className="hint">同一句里最容易卡住的点，拆成更短的句子再练一遍。</p>
      {drills.map((drill) => (
        <DrillCard key={drill.id} drill={drill} lang={lang} />
      ))}
    </section>
  );
}
