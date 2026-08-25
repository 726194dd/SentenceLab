import type { Sentence } from "../../../types";
import { A2 } from "../../a2";
import { loadLevel } from "../../more/load";
import { A2_PACK } from "../../more/a2";

export const LEVEL_SENTENCES: Sentence[] = [
  ...A2,
  ...loadLevel("A2", A2_PACK),
].map((item) => ({ ...item, lang: "en" as const }));
