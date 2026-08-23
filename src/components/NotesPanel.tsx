import type { Sentence } from "../types";

export function NotesPanel({ sentence }: { sentence: Sentence }) {
  return (
    <section className="notes">
      <article className="note-block">
        <h3>句子结构</h3>
        <p>{sentence.notes.structure}</p>
      </article>
      <article className="note-block">
        <h3>语法要点</h3>
        <ul>
          {sentence.notes.grammar.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article className="note-block">
        <h3>词汇</h3>
        <div className="vocab-list">
          {sentence.notes.vocab.map((item) => (
            <div className="vocab-item" key={item.word}>
              <b>{item.word}</b>
              <span>{item.meaning}</span>
            </div>
          ))}
        </div>
      </article>
      <article className="note-block">
        <h3>翻译与用法</h3>
        <p>{sentence.notes.tips}</p>
      </article>
    </section>
  );
}
