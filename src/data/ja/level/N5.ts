import { loadJaLevelMerged } from "../load";
import { N5_PACK } from "../packs/n5";
import { N5_MORE } from "../more/n5";

export const LEVEL_SENTENCES = loadJaLevelMerged("N5", N5_PACK, N5_MORE);
