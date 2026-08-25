import { loadJaLevelMerged } from "../load";
import { N3_PACK } from "../packs/n3";
import { N3_MORE } from "../more/n3";

export const LEVEL_SENTENCES = loadJaLevelMerged("N3", N3_PACK, N3_MORE);
