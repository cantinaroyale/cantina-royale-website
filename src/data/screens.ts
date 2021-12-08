import images from "../images/index";
import {
  Cantina,
  Main,
  Pve,
  Pvp,
  Variations,
  Scholarships,
  Apes,
} from "../screens";
import Partners from "../screens/Partners";
import Species from "../screens/Species";
import { Screen } from "../types";

const screens: Screen[] = [
  {
    component: Main,
    img: images.main.bg,
    overlay: images.main.overlay,
    name: "Home",
  },
  {
    component: Cantina,
    img: images.cantina.bg,
    overlay: images.cantina.overlay,
    name: "Cantina Metaverse",
  },
  {
    component: Species,
    img: images.species.bg,
    overlay: images.species.overlay,
    name: "Alien Species",
  },
  {
    component: Variations,
    img: images.variations.bg,
    overlay: images.variations.overlay,
    name: "3D NFT characters",
  },
  {
    component: Pve,
    img: images.pve.bg,
    overlay: images.pve.overlay,
    name: "PVE Game Mode",
  },
  {
    component: Pvp,
    img: images.pvp.bg,
    overlay: images.pvp.overlay,
    name: "PVP Game Mode",
  },
  {
    component: Scholarships,
    img: images.scholarships.bg,
    overlay: images.scholarships.overlay,
    name: "Scholarship Programs ",
  },
  {
    component: Apes,
    img: images.apes.bg,
    overlay: images.apes.overlay,
    name: "3D playable NFTs",
  },
  {
    component: Partners,
    img: images.partners.bg,
    overlay: images.partners.overlay,
    name: "Partners and Backers",
  },
];

const screenOverlays = screens.map((s: Screen) => s.overlay);
const screensImages = screens.map((s: Screen) => s.img);
export { screens, screenOverlays, screensImages };
