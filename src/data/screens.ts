import images from "../images/index";
import { v4 as uuidv4 } from "uuid";

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
    id: uuidv4(),
  },
  {
    component: Cantina,
    img: images.cantina.bg,
    overlay: images.cantina.overlay,
    name: "Cantina Metaverse",
    id: uuidv4(),
  },
  {
    component: Species,
    img: images.species.bg,
    overlay: images.species.overlay,
    name: "Alien Species",
    id: uuidv4(),
  },
  {
    component: Variations,
    img: images.variations.bg,
    overlay: images.variations.overlay,
    name: "3D NFT characters",
    id: uuidv4(),
  },
  {
    component: Pve,
    img: images.pve.bg,
    overlay: images.pve.overlay,
    name: "PVE Game Modes",
    id: uuidv4(),
  },
  {
    component: Pvp,
    img: images.pvp.bg,
    overlay: images.pvp.overlay,
    name: "PVP Game Modes",
    id: uuidv4(),
  },
  {
    component: Scholarships,
    img: images.scholarships.bg,
    overlay: images.scholarships.overlay,
    name: "Scholarship Programs ",
    id: uuidv4(),
  },
  {
    component: Apes,
    img: images.apes.bg,
    overlay: images.apes.overlay,
    name: "3D playable NFTs",
    id: uuidv4(),
  },
  {
    component: Partners,
    img: images.partners.bg,
    overlay: images.partners.overlay,
    name: "Partners and Investors",
    id: uuidv4(),
  },
];

export { screens };




