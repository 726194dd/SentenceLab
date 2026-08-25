import { loadJaLevelMerged } from "./load";
import { N5_PACK } from "./packs/n5";
import { N4_PACK } from "./packs/n4";
import { N3_PACK } from "./packs/n3";
import { N2_PACK } from "./packs/n2";
import { N1_PACK } from "./packs/n1";
import { N5_MORE } from "./more/n5";
import { N4_MORE } from "./more/n4";
import { N3_MORE } from "./more/n3";
import { N2_MORE } from "./more/n2";
import { N1_MORE } from "./more/n1";

export const JA_SENTENCES = [
  ...loadJaLevelMerged("N5", N5_PACK, N5_MORE),
  ...loadJaLevelMerged("N4", N4_PACK, N4_MORE),
  ...loadJaLevelMerged("N3", N3_PACK, N3_MORE),
  ...loadJaLevelMerged("N2", N2_PACK, N2_MORE),
  ...loadJaLevelMerged("N1", N1_PACK, N1_MORE),
];
