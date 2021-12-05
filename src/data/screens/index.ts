import images from "../../images/index";
import {
  Cantina,
  Main,
  Pve,
  Pvp,
  Variations,
  Scholarships,
  Apes,
} from "../../screens";
import Species from "../../screens/Species";
import { Screen } from "../../types";

const screens: Screen[] = [
  {
    component: Main,
    img: images.main.bg,
    overlay: images.main.overlay,
  },
  {
    component: Cantina,
    img: images.cantina.bg,
    overlay: images.cantina.overlay,
  },
  {
    component: Species,
    img: images.species.bg,
    overlay: images.species.bverlay,
  },
  {
    component: Variations,
    img: images.variations.bg,
    overlay: images.variations.overlay,
  },
  {
    component: Pve,
    img: images.pve.bg,
    overlay: images.pve.overlay,
  },
  {
    component: Pvp,
    img: images.pvp.bg,
    overlay: images.pvp.overlay,
  },
  {
    component: Scholarships,
    img: images.scholarships.bg,
    overlay: images.scholarships.overlay,
  },
  {
    component: Apes,
    img: images.apes.bg,
    overlay: images.apes.overlay,
  },
];

const screenOverlays = screens.map((s: Screen) => s.overlay);

export { screens, screenOverlays };
