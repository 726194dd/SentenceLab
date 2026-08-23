import type { Scenario } from "../types";
import daily from "../assets/scenes/daily.jpg";
import dining from "../assets/scenes/dining.jpg";
import health from "../assets/scenes/health.jpg";
import shopping from "../assets/scenes/shopping.jpg";
import social from "../assets/scenes/social.jpg";
import study from "../assets/scenes/study.jpg";
import travel from "../assets/scenes/travel.jpg";
import work from "../assets/scenes/work.jpg";

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
