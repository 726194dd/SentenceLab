import { Capacitor } from "@capacitor/core";
import type { LanguageId, VocabItem } from "../types";
import { tokenize } from "./check";

export function isOfflineWordLookup(): boolean {
  return import.meta.env.VITE_OFFLINE_ONLY === "true" || Capacitor.isNativePlatform();
}

export interface WordSense {
  pos: string;
  meaning: string;
  example?: string;
}

export interface WordEntry {
  word: string;
  speak: string;
  phonetic?: string;
  zh?: string;
  phrase?: string;
  senses: WordSense[];
}

const POS_ZH: Record<string, string> = {
  noun: "名词",
  verb: "动词",
  adjective: "形容词",
  adverb: "副词",
  pronoun: "代词",
  preposition: "介词",
  conjunction: "连词",
  determiner: "限定词",
  article: "冠词",
  interjection: "感叹词",
  numeral: "数词",
  auxiliary: "助动词",
};

const COMMON_ZH: Record<string, string> = {
  i: "我",
  me: "我（宾格）",
  my: "我的",
  mine: "我的（东西）",
  you: "你、你们",
  your: "你的、你们的",
  he: "他",
  him: "他（宾格）",
  his: "他的",
  she: "她",
  her: "她的；她（宾格）",
  it: "它",
  its: "它的",
  we: "我们",
  us: "我们（宾格）",
  our: "我们的",
  they: "他们、它们",
  them: "他们（宾格）",
  their: "他们的",
  a: "一个（泛指）",
  an: "一个（用在元音前）",
  the: "这、那（特指）",
  this: "这个",
  that: "那个",
  these: "这些",
  those: "那些",
  is: "是",
  am: "是（配合 I）",
  are: "是（配合 you/we/they）",
  was: "是（过去，单数）",
  were: "是（过去，复数）",
  be: "是、成为",
  been: "已经是（完成时）",
  being: "正在成为",
  have: "有；助动词",
  has: "有（第三人称单数）",
  had: "有（过去）",
  do: "做；助动词",
  does: "做（第三人称单数）",
  did: "做（过去）",
  will: "将要",
  would: "会、愿意",
  can: "能、可以",
  could: "能（过去或委婉）",
  should: "应该",
  may: "可以、可能",
  might: "可能",
  must: "必须",
  not: "不",
  to: "到、去；不定式标记",
  of: "的、属于",
  in: "在…里面",
  on: "在…上面；在某天",
  at: "在（地点或时刻）",
  for: "为了、给",
  with: "和、带着",
  from: "从",
  by: "被；在旁边；乘（交通）",
  as: "作为、像",
  about: "关于、大约",
  into: "进入",
  after: "在…之后",
  before: "在…之前",
  and: "和",
  or: "或者",
  but: "但是",
  if: "如果",
  when: "当…时",
  because: "因为",
  so: "所以；如此",
  very: "非常",
  too: "也；太",
  also: "也",
  just: "只是、刚刚",
  now: "现在",
  here: "这里",
  there: "那里；有",
  today: "今天",
  tomorrow: "明天",
  yesterday: "昨天",
  please: "请",
  hello: "你好",
  yes: "是的",
  no: "不",
};

const cache = new Map<string, WordEntry>();
const zhCache = new Map<string, string>();

export function splitAnswer(text: string): Array<{ kind: "word" | "mark"; value: string }> {
  return text.split(/([A-Za-z]+(?:'[A-Za-z]+)*)/g).flatMap((value) => {
    if (!value) return [];
    return [{ kind: /^[A-Za-z]/.test(value) ? "word" : "mark", value }];
  });
}

function stems(word: string): string[] {
  const w = word.toLowerCase().replace(/[^a-z']/g, "");
  if (!w) return [];
  const out = [w];
  if (w.endsWith("n't")) out.push(w.slice(0, -3));
  if (w.endsWith("ies") && w.length > 4) out.push(`${w.slice(0, -3)}y`);
  if (w.endsWith("es") && w.length > 3) out.push(w.slice(0, -2));
  if (w.endsWith("s") && !w.endsWith("ss") && w.length > 2) out.push(w.slice(0, -1));
  if (w.endsWith("ing") && w.length > 4) {
    out.push(w.slice(0, -3));
    out.push(`${w.slice(0, -3)}e`);
  }
  if (w.endsWith("ed") && w.length > 3) {
    out.push(w.slice(0, -2));
    out.push(w.slice(0, -1));
  }
  return [...new Set(out)];
}

export function matchJaVocab(slot: string, vocab: VocabItem[]): VocabItem | null {
  const core = slot.replace(/[。、！？]/g, "").trim();
  if (!core) return null;

  const exact = vocab.find((item) => item.word === core);
  if (exact) return exact;

  let best: VocabItem | null = null;
  for (const item of vocab) {
    if (!item.word || !core.includes(item.word)) continue;
    if (!best || item.word.length > best.word.length) best = item;
  }
  return best;
}

export function matchVocab(token: string, vocab: VocabItem[]): VocabItem | null {
  const keys = stems(token);
  const exact = vocab.find((item) => keys.includes(item.word.toLowerCase()));
  if (exact) return exact;
  const phrases = vocab.filter((item) => tokenize(item.word).some((part) => keys.includes(part)));
  return phrases.sort((a, b) => b.word.length - a.word.length)[0] ?? null;
}

function posLabel(pos: string): string {
  return POS_ZH[pos.toLowerCase()] ?? pos;
}

interface DictionaryHit {
  phonetic?: string;
  senses: WordSense[];
}

async function fetchDictionary(word: string): Promise<DictionaryHit | null> {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
  if (!response.ok) return null;
  const data = (await response.json()) as Array<{
    phonetic?: string;
    phonetics?: Array<{ text?: string }>;
    meanings?: Array<{
      partOfSpeech?: string;
      definitions?: Array<{ definition?: string; example?: string }>;
    }>;
  }>;
  const first = data[0];
  if (!first) return null;
  const senses = (first.meanings ?? []).flatMap((meaning) =>
    (meaning.definitions ?? []).slice(0, 1).map((definition) => ({
      pos: posLabel(meaning.partOfSpeech ?? ""),
      meaning: definition.definition ?? "",
      example: definition.example,
    })),
  ).filter((sense) => sense.meaning);
  return {
    phonetic: first.phonetic || first.phonetics?.find((item) => item.text)?.text,
    senses: senses.slice(0, 3),
  };
}

export function localZh(token: string): string | undefined {
  for (const key of stems(token)) {
    if (COMMON_ZH[key]) return COMMON_ZH[key];
  }
  return undefined;
}

function cleanQuery(text: string): string {
  return text
    .replace(/[“”"‘’`]/g, "'")
    .replace(/[^A-Za-z0-9'\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchZh(query: string): Promise<string> {
  const key = query.toLowerCase();
  const cached = zhCache.get(key);
  if (cached !== undefined) return cached;

  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(query)}&langpair=en|zh-CN`,
    );
    if (!response.ok) {
      zhCache.set(key, "");
      return "";
    }
    const data = (await response.json()) as { responseData?: { translatedText?: string } };
    const zh = data.responseData?.translatedText?.trim() ?? "";
    const usable = zh && zh.toLowerCase() !== key ? zh : "";
    zhCache.set(key, usable);
    return usable;
  } catch {
    zhCache.set(key, "");
    return "";
  }
}

export function buildLocalEntry(
  token: string,
  vocab: VocabItem[],
  lang: LanguageId = "en",
): WordEntry {
  if (lang === "ja") {
    const vocabItem = matchJaVocab(token, vocab) ?? matchVocab(token.trim(), vocab);
    return {
      word: token,
      speak: token,
      zh: vocabItem?.meaning ?? "",
      senses: vocabItem ? [{ pos: "", meaning: vocabItem.meaning }] : [],
    };
  }

  const clean = token.replace(/[^A-Za-z']/g, "");
  const vocabItem = matchVocab(clean, vocab);
  const zh = vocabItem?.meaning ?? localZh(clean);
  return {
    word: clean,
    speak: clean,
    zh,
    phrase: vocabItem && tokenize(vocabItem.word).length > 1 ? vocabItem.word : undefined,
    senses: zh ? [{ pos: "", meaning: zh }] : [],
  };
}

export async function translateWord(token: string): Promise<string> {
  if (isOfflineWordLookup()) {
    const query = cleanQuery(token);
    if (!query) return "";
    const parts = query.split(" ");
    if (parts.length === 1) return localZh(parts[0]) ?? "";
    return parts.map((part) => localZh(part) ?? part).join(" ");
  }

  const query = cleanQuery(token);
  if (!query) return "";
  const parts = query.split(" ");
  if (parts.length === 1) {
    const local = localZh(parts[0]);
    if (local) {
      zhCache.set(parts[0].toLowerCase(), local);
      return local;
    }
  }
  return fetchZh(query);
}

export async function lookupWord(
  token: string,
  vocab: VocabItem[],
  lang: LanguageId = "en",
): Promise<WordEntry> {
  const entry = buildLocalEntry(token, vocab, lang);
  const cacheKey =
    lang === "ja"
      ? `${lang}:${token}|${vocab.map((item) => item.word).join(",")}`
      : `${entry.word.toLowerCase()}|${vocab.map((item) => item.word).join(",")}`;

  if (lang === "ja" || isOfflineWordLookup()) {
    cache.set(cacheKey, entry);
    return entry;
  }

  const cached = cache.get(cacheKey);
  if (cached?.senses.length) return { ...cached, speak: entry.speak };

  try {
    const dict = await fetchDictionary(stems(entry.word)[0] || entry.word);
    if (dict) {
      entry.phonetic = dict.phonetic;
      entry.senses = dict.senses;
    }
  } catch {
    // Keep local gloss when the dictionary API is unavailable.
  }

  cache.set(cacheKey, entry);
  return entry;
}
