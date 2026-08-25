import type { Sentence } from "../../../types";
import { A1 } from "../../a1";
import { loadLevel } from "../../more/load";
import { A1_PACK } from "../../more/a1";

export const LEVEL_SENTENCES: Sentence[] = [
  ...A1,
  ...loadLevel("A1", A1_PACK),
].map((item) => ({ ...item, lang: "en" as const }));
