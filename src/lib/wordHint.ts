import type { LanguageId, VocabItem } from "../types";
import { localZh, lookupWord, matchJaVocab, matchVocab } from "./wordLookup";

export interface WordHint {
  pos: string;
  phonetic: string;
  zh: string;
}

const LOCAL_POS: Record<string, string> = {
  i: "代词",
  me: "代词",
  my: "限定词",
  mine: "代词",
  you: "代词",
  your: "限定词",
  he: "代词",
  him: "代词",
  his: "限定词",
  she: "代词",
  her: "代词",
  it: "代词",
  its: "限定词",
  we: "代词",
  us: "代词",
  our: "限定词",
  they: "代词",
  them: "代词",
  their: "限定词",
  this: "代词",
  that: "代词",
  these: "代词",
  those: "代词",
  who: "代词",
  what: "代词",
  which: "代词",
  a: "冠词",
  an: "冠词",
  the: "冠词",
  is: "助动词",
  am: "助动词",
  are: "助动词",
  was: "助动词",
  were: "助动词",
  be: "助动词",
  been: "助动词",
  being: "助动词",
  have: "助动词",
  has: "助动词",
  had: "助动词",
  do: "助动词",
  does: "助动词",
  did: "助动词",
  will: "助动词",
  would: "助动词",
  can: "助动词",
  could: "助动词",
  should: "助动词",
  may: "助动词",
  might: "助动词",
  must: "助动词",
  not: "副词",
  to: "介词",
  of: "介词",
  in: "介词",
  on: "介词",
  at: "介词",
  for: "介词",
  with: "介词",
  from: "介词",
  by: "介词",
  as: "介词",
  about: "介词",
  into: "介词",
  after: "介词",
  before: "介词",
  and: "连词",
  or: "连词",
  but: "连词",
  if: "连词",
  when: "连词",
  because: "连词",
  so: "连词",
  very: "副词",
  too: "副词",
  also: "副词",
  just: "副词",
  now: "副词",
  here: "副词",
  there: "副词",
  today: "副词",
  tomorrow: "副词",
  yesterday: "副词",
  please: "感叹词",
  hello: "感叹词",
  yes: "感叹词",
  no: "感叹词",
};

const LOCAL_IPA: Record<string, string> = {
  i: "/aɪ/",
  me: "/miː/",
  my: "/maɪ/",
  you: "/juː/",
  your: "/jɔː/",
  he: "/hiː/",
  him: "/hɪm/",
  his: "/hɪz/",
  she: "/ʃiː/",
  her: "/hɜː/",
  it: "/ɪt/",
  its: "/ɪts/",
  we: "/wiː/",
  us: "/ʌs/",
  our: "/aʊə/",
  they: "/ðeɪ/",
  them: "/ðem/",
  their: "/ðeə/",
  this: "/ðɪs/",
  that: "/ðæt/",
  these: "/ðiːz/",
  those: "/ðəʊz/",
  a: "/ə/",
  an: "/ən/",
  the: "/ðə/",
  is: "/ɪz/",
  am: "/æm/",
  are: "/ɑː/",
  was: "/wɒz/",
  were: "/wɜː/",
  be: "/biː/",
  been: "/bɪn/",
  being: "/ˈbiːɪŋ/",
  have: "/hæv/",
  has: "/hæz/",
  had: "/hæd/",
  do: "/duː/",
  does: "/dʌz/",
  did: "/dɪd/",
  will: "/wɪl/",
  would: "/wʊd/",
  can: "/kæn/",
  could: "/kʊd/",
  should: "/ʃʊd/",
  may: "/meɪ/",
  might: "/maɪt/",
  must: "/mʌst/",
  not: "/nɒt/",
  to: "/tuː/",
  of: "/əv/",
  in: "/ɪn/",
  on: "/ɒn/",
  at: "/æt/",
  for: "/fɔː/",
  with: "/wɪð/",
  from: "/frɒm/",
  by: "/baɪ/",
  as: "/æz/",
  about: "/əˈbaʊt/",
  and: "/ænd/",
  or: "/ɔː/",
  but: "/bʌt/",
  if: "/ɪf/",
  when: "/wen/",
  because: "/bɪˈkɒz/",
  so: "/səʊ/",
  very: "/ˈveri/",
  too: "/tuː/",
  also: "/ˈɔːlsəʊ/",
  just: "/dʒʌst/",
  now: "/naʊ/",
  here: "/hɪə/",
  there: "/ðeə/",
  today: "/təˈdeɪ/",
  tomorrow: "/təˈmɒrəʊ/",
  yesterday: "/ˈjestədeɪ/",
  please: "/pliːz/",
  hello: "/həˈləʊ/",
  yes: "/jes/",
  no: "/nəʊ/",
  want: "/wɒnt/",
  go: "/ɡəʊ/",
  get: "/ɡet/",
  like: "/laɪk/",
  take: "/teɪk/",
  make: "/meɪk/",
  come: "/kʌm/",
  see: "/siː/",
  know: "/nəʊ/",
  think: "/θɪŋk/",
  need: "/niːd/",
  look: "/lʊk/",
  give: "/ɡɪv/",
  use: "/juːz/",
  find: "/faɪnd/",
  tell: "/tel/",
  ask: "/ɑːsk/",
  work: "/wɜːk/",
  call: "/kɔːl/",
  try: "/traɪ/",
  feel: "/fiːl/",
  become: "/bɪˈkʌm/",
  leave: "/liːv/",
  put: "/pʊt/",
  mean: "/miːn/",
  keep: "/kiːp/",
  let: "/let/",
  begin: "/bɪˈɡɪn/",
  seem: "/siːm/",
  help: "/help/",
  talk: "/tɔːk/",
  turn: "/tɜːn/",
  start: "/stɑːt/",
  show: "/ʃəʊ/",
  hear: "/hɪə/",
  play: "/pleɪ/",
  run: "/rʌn/",
  move: "/muːv/",
  live: "/lɪv/",
  believe: "/bɪˈliːv/",
  bring: "/brɪŋ/",
  happen: "/ˈhæpən/",
  write: "/raɪt/",
  sit: "/sɪt/",
  stand: "/stænd/",
  lose: "/luːz/",
  pay: "/peɪ/",
  meet: "/miːt/",
  include: "/ɪnˈkluːd/",
  continue: "/kənˈtɪnjuː/",
  set: "/set/",
  learn: "/lɜːn/",
  change: "/tʃeɪndʒ/",
  lead: "/liːd/",
  understand: "/ˌʌndəˈstænd/",
  watch: "/wɒtʃ/",
  follow: "/ˈfɒləʊ/",
  stop: "/stɒp/",
  create: "/kriˈeɪt/",
  speak: "/spiːk/",
  read: "/riːd/",
  spend: "/spend/",
  grow: "/ɡrəʊ/",
  open: "/ˈəʊpən/",
  walk: "/wɔːk/",
  win: "/wɪn/",
  offer: "/ˈɒfə/",
  remember: "/rɪˈmembə/",
  love: "/lʌv/",
  consider: "/kənˈsɪdə/",
  appear: "/əˈpɪə/",
  buy: "/baɪ/",
  wait: "/weɪt/",
  serve: "/sɜːv/",
  die: "/daɪ/",
  send: "/send/",
  expect: "/ɪkˈspekt/",
  build: "/bɪld/",
  stay: "/steɪ/",
  fall: "/fɔːl/",
  cut: "/kʌt/",
  reach: "/riːtʃ/",
  kill: "/kɪl/",
  remain: "/rɪˈmeɪn/",
  home: "/həʊm/",
  park: "/pɑːk/",
  weekends: "/ˈwiːkendz/",
  shower: "/ˈʃaʊə/",
  parents: "/ˈpeərənts/",
  children: "/ˈtʃɪldrən/",
  kids: "/kɪdz/",
  singing: "/ˈsɪŋɪŋ/",
  songs: "/sɒŋz/",
  song: "/sɒŋ/",
  careful: "/ˈkeəfʊl/",
  edge: "/edʒ/",
  sharp: "/ʃɑːp/",
};

function cleanWord(word: string): string {
  return word.replace(/[^A-Za-z']/g, "");
}

function formatIpa(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return "";
  if (/[\u0300-\u036f]/.test(trimmed) || trimmed.length > 16) return "";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed.replace(/^\[|\]$/g, "")}/`;
}

function guessPos(word: string): string {
  const key = word.toLowerCase();
  if (LOCAL_POS[key]) return LOCAL_POS[key];
  if (key.endsWith("n't")) return "副词";
  if (key.endsWith("ly") && key.length > 3) return "副词";
  if (/(tion|sion|ness|ment|ity|ship|hood)$/.test(key)) return "名词";
  if (/(ous|ful|less|ish|ive|able|al)$/.test(key) && key.length > 4) return "形容词";
  return "";
}

const JA_PARTICLE_ZH: Record<string, string> = {
  は: "主题",
  が: "主语",
  を: "宾语",
  に: "方向/时间",
  で: "方式/地点",
  と: "和/与",
  から: "从",
  まで: "直到",
  も: "也",
  の: "的",
  へ: "向",
  より: "比",
};

const JA_ENDING_ZH: Record<string, string> = {
  です: "礼貌陈述",
  ます: "礼貌敬体",
  でした: "过去礼貌",
  ました: "过去敬体",
  ません: "否定礼貌",
  ない: "否定",
  だ: "简体断定",
  である: "书面断定",
};

function jaParticleNote(slot: string, matched: VocabItem): string {
  const tail = slot.replace(/[。、！？]/g, "").replace(matched.word, "");
  if (!tail) return "";
  const notes = [...tail].map((char) => JA_PARTICLE_ZH[char] ?? char).filter(Boolean);
  return notes.length ? notes.join("·") : "";
}

function guessJaPos(slot: string, matched: VocabItem | null): string {
  const core = slot.replace(/[。、！？]/g, "").trim();
  if (!core || slot === "。" || slot === "、") return "标点";
  if (JA_ENDING_ZH[core]) return "句末";
  if (!matched) return "词块";

  const word = matched.word;
  if (/^(い|な)($|[い])/.test(word) || /[い]$/.test(word)) {
    if (word !== "ない" && !word.endsWith("ない")) return "形容词";
  }
  if (/^(する|来る|行く|ある|いる)/.test(word) || /[るうくすつぬぶむぐ]$/.test(word)) {
    return "动词";
  }
  if (jaParticleNote(slot, matched)) return "名词";
  return "词块";
}

function jaHintZh(slot: string, matched: VocabItem | null): string {
  const core = slot.replace(/[。、！？]/g, "").trim();
  if (slot === "。") return "句号";
  if (slot === "、") return "顿号";
  if (JA_ENDING_ZH[core]) return JA_ENDING_ZH[core];
  if (!matched) return "";
  const particle = jaParticleNote(slot, matched);
  return particle ? `${matched.meaning}（${particle}）` : matched.meaning;
}

function localJaHint(slot: string, vocab: VocabItem[]): WordHint {
  const matched = matchJaVocab(slot, vocab);
  const pos = guessJaPos(slot, matched);
  return {
    pos,
    phonetic: matched?.word ?? "",
    zh: jaHintZh(slot, matched),
  };
}

export function localHint(word: string, vocab: VocabItem[], lang: LanguageId = "en"): WordHint {
  if (lang === "ja") return localJaHint(word, vocab);
  const clean = cleanWord(word);
  const key = clean.toLowerCase();
  return {
    pos: guessPos(clean),
    phonetic: LOCAL_IPA[key] ?? "",
    zh: matchVocab(clean, vocab)?.meaning ?? localZh(clean) ?? "",
  };
}

export function posTone(pos: string): string {
  if (pos === "名词" || pos === "主语" || pos === "宾语") return pos === "主语" ? "pron" : "noun";
  if (pos === "动词" || pos === "谓语") return "verb";
  if (pos === "定语") return "art";
  if (pos === "状语") return "adv";
  if (pos === "助动词" || pos === "句末") return "aux";
  if (pos === "形容词") return "adj";
  if (pos === "副词") return "adv";
  if (pos === "冠词" || pos === "限定词") return "art";
  if (pos === "代词") return "pron";
  if (pos === "介词" || pos === "助词") return "prep";
  if (pos === "连词") return "conj";
  if (pos === "词块") return "noun";
  if (pos === "标点") return "other";
  return "other";
}

export function withRoles(words: string[], hints: WordHint[]): WordHint[] {
  const pred = hints.findIndex((hint) => hint.pos === "动词" || hint.pos === "助动词");
  if (pred < 0) return hints;
  return hints.map((hint, index) => {
    if (index < pred && (hint.pos === "代词" || hint.pos === "名词")) {
      return { ...hint, pos: "主语" };
    }
    if (hint.pos === "动词") return { ...hint, pos: "谓语" };
    if (index === pred + 1 && hints[pred]?.pos === "助动词" && /ing$/i.test(words[index] ?? "")) {
      return { ...hint, pos: "谓语" };
    }
    if (index > pred && (hint.pos === "名词" || hint.pos === "代词")) {
      return { ...hint, pos: "宾语" };
    }
    if (hint.pos === "限定词" || hint.pos === "形容词") return { ...hint, pos: hint.pos === "限定词" ? "定语" : "形容词" };
    if (hint.pos === "副词") return { ...hint, pos: "状语" };
    return hint;
  });
}

export async function lookupHint(
  word: string,
  vocab: VocabItem[],
  lang: LanguageId = "en",
): Promise<WordHint> {
  const seed = localHint(word, vocab, lang);
  if (lang === "ja") return seed;
  const entry = await lookupWord(word, vocab);
  return {
    pos: seed.pos || entry.senses[0]?.pos || "名词",
    phonetic: seed.phonetic || formatIpa(entry.phonetic ?? ""),
    zh: seed.zh || entry.zh || "",
  };
}
