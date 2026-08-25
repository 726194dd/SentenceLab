import type { Sentence } from "../../../types";
import { B2 } from "../../b2";
import { loadLevel } from "../../more/load";
import { B2_PACK } from "../../more/b2";

export const LEVEL_SENTENCES: Sentence[] = [
  ...B2,
  ...loadLevel("B2", B2_PACK),
].map((item) => ({ ...item, lang: "en" as const }));
