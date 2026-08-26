/** @typedef {{ pron?: string; read?: string; string?: string }} FrontendNode */

/** hiragana (single char) / digraph -> Kokoro-compatible IPA-ish phoneme */
export const HEPBURN = {
  あ: "a",
  い: "i",
  う: "ɯ",
  え: "e",
  お: "o",
  ぁ: "a",
  ぃ: "i",
  ぅ: "ɯ",
  ぇ: "e",
  ぉ: "o",
  か: "ka",
  き: "kʲi",
  く: "kɯ",
  け: "ke",
  こ: "ko",
  が: "ɡa",
  ぎ: "ɡʲi",
  ぐ: "ɡɯ",
  げ: "ɡe",
  ご: "ɡo",
  さ: "sa",
  し: "ɕi",
  す: "sɨ",
  せ: "se",
  そ: "so",
  ざ: "ʣa",
  じ: "ʥi",
  ず: "zɨ",
  ぜ: "ʣe",
  ぞ: "ʣo",
  た: "ta",
  ち: "ʨi",
  つ: "ʦɨ",
  て: "te",
  と: "to",
  だ: "da",
  ぢ: "ʥi",
  づ: "zɨ",
  で: "de",
  ど: "do",
  な: "na",
  に: "ɲi",
  ぬ: "nɯ",
  ね: "ne",
  の: "no",
  は: "ha",
  ひ: "çi",
  ふ: "ɸɯ",
  へ: "he",
  ほ: "ho",
  ば: "ba",
  び: "bʲi",
  ぶ: "bɯ",
  べ: "be",
  ぼ: "bo",
  ぱ: "pa",
  ぴ: "pʲi",
  ぷ: "pɯ",
  ぺ: "pe",
  ぽ: "po",
  ま: "ma",
  み: "mʲi",
  む: "mɯ",
  め: "me",
  も: "mo",
  ゃ: "ja",
  や: "ja",
  ゅ: "jɯ",
  ゆ: "jɯ",
  ょ: "jo",
  よ: "jo",
  ら: "ɾa",
  り: "ɾʲi",
  る: "ɾɯ",
  れ: "ɾe",
  ろ: "ɾo",
  ゎ: "βa",
  わ: "βa",
  ゐ: "i",
  ゑ: "e",
  を: "o",
  ゔ: "vɯ",
  ゕ: "ka",
  ゖ: "ke",
  ヷ: "va",
  ヸ: "vʲi",
  ヹ: "ve",
  ヺ: "vo",
  いぇ: "je",
  うぃ: "βi",
  うぇ: "βe",
  うぉ: "βo",
  きぇ: "kʲe",
  きゃ: "kʲa",
  きゅ: "kʲɨ",
  きょ: "kʲo",
  ぎゃ: "ɡʲa",
  ぎゅ: "ɡʲɨ",
  ぎょ: "ɡʲo",
  くぁ: "kᵝa",
  くぃ: "kᵝi",
  くぇ: "kᵝe",
  くぉ: "kᵝo",
  ぐぁ: "ɡᵝa",
  ぐぃ: "ɡᵝi",
  ぐぇ: "ɡᵝe",
  ぐぉ: "ɡᵝo",
  しぇ: "ɕe",
  しゃ: "ɕa",
  しゅ: "ɕɨ",
  しょ: "ɕo",
  じぇ: "ʥe",
  じゃ: "ʥa",
  じゅ: "ʥɨ",
  じょ: "ʥo",
  ちぇ: "ʨe",
  ちゃ: "ʨa",
  ちゅ: "ʨɨ",
  ちょ: "ʨo",
  ぢゃ: "ʥa",
  ぢゅ: "ʥɨ",
  ぢょ: "ʥo",
  つぁ: "ʦa",
  つぃ: "ʦʲi",
  つぇ: "ʦe",
  つぉ: "ʦo",
  てぃ: "tʲi",
  てゅ: "tʲɨ",
  でぃ: "dʲi",
  でゅ: "dʲɨ",
  とぅ: "tɯ",
  どぅ: "dɯ",
  にぇ: "ɲe",
  にゃ: "ɲa",
  にゅ: "ɲɨ",
  にょ: "ɲo",
  ひぇ: "çe",
  ひゃ: "ça",
  ひゅ: "çɨ",
  ひょ: "ço",
  びゃ: "bʲa",
  びゅ: "bʲɨ",
  びょ: "bʲo",
  ぴゃ: "pʲa",
  ぴゅ: "pʲɨ",
  ぴょ: "pʲo",
  ふぁ: "ɸa",
  ふぃ: "ɸʲi",
  ふぇ: "ɸe",
  ふぉ: "ɸo",
  ふゅ: "ɸʲɨ",
  ふょ: "ɸʲo",
  みゃ: "mʲa",
  みゅ: "mʲɨ",
  みょ: "mʲo",
  りゃ: "ɾʲa",
  りゅ: "ɾʲɨ",
  りょ: "ɾʲo",
  ゔぁ: "va",
  ゔぃ: "vʲi",
  ゔぇ: "ve",
  ゔぉ: "vo",
  ゔゅ: "bʲɨ",
  ゔょ: "bʲo",
};

const SUTEGANA = new Set(["ゃ", "ゅ", "ょ", "ぁ", "ぃ", "ぅ", "ぇ", "ぉ"]);

export const PUNCT = {
  "。": ".",
  "、": ",",
  "？": "?",
  "！": "!",
  "「": "“",
  "」": "”",
  "『": "“",
  "』": "”",
  "：": ":",
  "；": ";",
  "（": "(",
  "）": ")",
  "《": "(",
  "》": ")",
  "【": "[",
  "】": "]",
  "・": " ",
  "，": ",",
  "～": "—",
  "〜": "—",
  "—": "—",
  "«": "“",
  "»": "”",
};

function nasalN(nextPhoneme) {
  if (!nextPhoneme) return "ɴ";
  const head = nextPhoneme[0];
  if ("mpb".includes(head)) return "m";
  if ("kɡ".includes(head)) return "ŋ";
  if (nextPhoneme.startsWith("ɲ") || nextPhoneme.startsWith("ʨ") || nextPhoneme.startsWith("ʥ")) {
    return "ɲ";
  }
  if ("ntdɾz".includes(head)) return "n";
  return "ɴ";
}

export function hiraganaWordToPhonemes(hira) {
  let out = "";
  const chars = Array.from(hira);
  for (let i = 0; i < chars.length; i++) {
    const kk = chars[i];
    const pk = i > 0 ? chars[i - 1] : undefined;
    const nk = i < chars.length - 1 ? chars[i + 1] : undefined;

    if (pk && HEPBURN[pk + kk] !== undefined) continue;
    if (nk && HEPBURN[kk + nk] !== undefined) {
      out += HEPBURN[kk + nk];
      i++;
      continue;
    }
    if (nk && SUTEGANA.has(nk)) {
      if (kk === "っ") continue;
      const base = HEPBURN[kk];
      const small = HEPBURN[nk];
      if (base && small) {
        out += base.slice(0, -1) + small;
        i++;
        continue;
      }
    }
    if (SUTEGANA.has(kk)) continue;
    if (kk === "ー") {
      out += "ː";
      continue;
    }
    if (kk === "っ") {
      out += "ʔ";
      continue;
    }
    if (kk === "ん") {
      let nextPhoneme;
      if (nk) {
        const nnk = i + 2 < chars.length ? chars[i + 2] : undefined;
        nextPhoneme = (nnk && HEPBURN[nk + nnk]) || HEPBURN[nk];
      }
      out += nasalN(nextPhoneme);
      continue;
    }
    out += HEPBURN[kk] ?? PUNCT[kk] ?? "";
  }
  return out;
}

function kataToHira(s) {
  return Array.from(s)
    .map((ch) => {
      const code = ch.codePointAt(0);
      if (code >= 0x30a1 && code <= 0x30f6) return String.fromCodePoint(code - 96);
      return ch;
    })
    .join("");
}

function isKanaPron(pron) {
  return Array.from(pron).some((ch) => {
    const code = ch.codePointAt(0);
    return (code >= 0x30a1 && code <= 0x30fa) || code === 0x30fc;
  });
}

/** Convert OpenJTalk runFrontend nodes to Kokoro phonemes (matches kokoro-js-jp). */
export function frontendToPhonemes(nodes) {
  const parts = [];
  for (const node of nodes) {
    const pron = node.pron || node.read || "";
    if (pron && isKanaPron(pron)) {
      const phonemes = hiraganaWordToPhonemes(kataToHira(pron));
      if (phonemes) parts.push(phonemes);
      continue;
    }
    if (node.string) {
      const mapped = Array.from(node.string)
        .map((c) => PUNCT[c] ?? "")
        .join("");
      if (mapped) parts.push(mapped);
    }
  }
  return parts.join(" ").replace(/\s+/g, " ").trim();
}
