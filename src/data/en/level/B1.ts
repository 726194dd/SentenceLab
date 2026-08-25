import type { Sentence } from "../../../types";
import { B1 } from "../../b1";
import { loadLevel } from "../../more/load";
import { B1_PACK } from "../../more/b1";

export const LEVEL_SENTENCES: Sentence[] = [
  ...B1,
  ...loadLevel("B1", B1_PACK),
].map((item) => ({ ...item, lang: "en" as const }));
