import { Cantina, Main } from "../screens";
import Species from "../screens/Species";
import { Screen } from "../types";
import images from "./images";
import videos from "./videos";

const transitionDirection = {
    next: "next",
    prev: "prev",
  };


  const screens:Screen[] = [
      {
        component: Main,
        img: images.MainBg,
        overlay: images.MainOverlay
      },
      {
        component: Cantina,
        img: images.CantinaBg,
        overlay: images.CantinaOverlay
      },
      {
        component: Species,
        img: images.speciesBg,
        overlay: images.speciesOverlay
      }
  ]


  const slides = [
    {
      text: "Galactic Ape",
      avatar: images.speciesFigure5,
      globe: images.speciesGlobe3,
    },
    {
      text: "Coming soon",
      avatar: images.speciesFigure1,
      globe: images.speciesGlobe4,
    },
    {
      text: "Coming soon",
      avatar: images.speciesFigure2,
      globe: images.speciesGlobe3,
    },
    {
      text: "Coming soon",
      avatar: images.speciesFigure3,
      globe: images.speciesGlobe2,
    },
    {
      text: "Coming soon",
      avatar: images.speciesFigure4,
      globe: images.speciesGlobe1,
    },
  ];

  const overlays = screens.map(s => s.overlay)

  const SCROLL_DURATION = 1000
  
  
  export {transitionDirection, SCROLL_DURATION, images, screens, videos, overlays, slides}