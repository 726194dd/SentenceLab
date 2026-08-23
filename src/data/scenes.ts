import type { Scenario } from "../types";
import daily from "../assets/scenes/daily.webp";
import dining from "../assets/scenes/dining.webp";
import health from "../assets/scenes/health.webp";
import shopping from "../assets/scenes/shopping.webp";
import social from "../assets/scenes/social.webp";
import study from "../assets/scenes/study.webp";
import travel from "../assets/scenes/travel.webp";
import work from "../assets/scenes/work.webp";

export const SCENE_ART: Record<Scenario, string> = {
  daily,
  travel,
  work,
  study,
  social,
  shopping,
  dining,
  health,
};
