import { useState } from "react";
import type { Drill } from "../types";
import { answersOf, checkSlots, emptySlots } from "../lib/check";
import { useListen } from "../lib/useSpeech";
import { IconSpeaker } from "./Icons";
import { WordBlanks } from "./WordBlanks";

function DrillCard({ drill }: { drill: Drill }) {
  const [values, setValues] = useState(() => emptySlots(drill.en));
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const listen = useListen(drill.en);
  const result = checkSlots(values, answersOf(drill));
  const marks = checked ? result.marks : values.map(() => "idle" as const);

  const check = () => setChecked(true);

  return (
    <article className="drill-card">
      <span className="focus">{drill.focus}</span>
      <p className="zh-line" style={{ fontSize: 22 }}>{drill.zh}</p>
      <div className="action-row">
        <button
          type="button"
          className="btn btn-soft"
          disabled={listen.disabled}
          onClick={listen.toggle}
        >
          <IconSpeaker />
          {listen.label}
        </button>
      </div>
      <WordBlanks
        target={drill.en}
        values={values}
        marks={marks}
        compact
        onChange={(next) => {
          setValues(next);
          setChecked(false);
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
      {showAnswer ? <p className="en-answer">{drill.en}</p> : null}
    </article>
  );
}

export function DrillList({ drills }: { drills: Drill[] }) {
  return (
    <section className="drills">
      <h2>根据难点展开练习</h2>
      <p className="hint">同一句里最容易卡住的点，拆成更短的句子再练一遍。</p>
      {drills.map((drill) => (
        <DrillCard key={drill.id} drill={drill} />
      ))}
    </section>
  );
}
