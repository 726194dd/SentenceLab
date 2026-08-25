import type { Sentence } from "../../../types";
import { C1 } from "../../c1";
import { loadLevel } from "../../more/load";
import { C1_PACK } from "../../more/c1";

export const LEVEL_SENTENCES: Sentence[] = [
  ...C1,
  ...loadLevel("C1", C1_PACK),
].map((item) => ({ ...item, lang: "en" as const }));
