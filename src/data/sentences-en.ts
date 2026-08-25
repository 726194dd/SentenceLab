import type { Sentence } from "../types";
import { A1 } from "./a1";
import { A2 } from "./a2";
import { B1 } from "./b1";
import { B2 } from "./b2";
import { C1 } from "./c1";
import { A1_PACK } from "./more/a1";
import { A2_PACK } from "./more/a2";
import { B1_PACK } from "./more/b1";
import { B2_PACK } from "./more/b2";
import { C1_PACK } from "./more/c1";
import { loadLevel } from "./more/load";

const RAW_EN: Omit<Sentence, "lang">[] = [
  ...A1,
  ...A2,
  ...B1,
  ...B2,
  ...C1,
  ...loadLevel("A1", A1_PACK),
  ...loadLevel("A2", A2_PACK),
  ...loadLevel("B1", B1_PACK),
  ...loadLevel("B2", B2_PACK),
  ...loadLevel("C1", C1_PACK),
];

export const EN_SENTENCES: Sentence[] = RAW_EN.map((item) => ({ ...item, lang: "en" as const }));
