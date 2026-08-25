import { loadJaLevel } from "./load";
import { N5_PACK } from "./packs/n5";
import { N4_PACK } from "./packs/n4";
import { N3_PACK } from "./packs/n3";
import { N2_PACK } from "./packs/n2";
import { N1_PACK } from "./packs/n1";

export const JA_SENTENCES = [
  ...loadJaLevel("N5", N5_PACK),
  ...loadJaLevel("N4", N4_PACK),
  ...loadJaLevel("N3", N3_PACK),
  ...loadJaLevel("N2", N2_PACK),
  ...loadJaLevel("N1", N1_PACK),
];
