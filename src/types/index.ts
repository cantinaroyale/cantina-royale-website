import { FC } from "react";

export interface ScreenComponentProps {
  isActive: boolean;
  appLoaded: boolean;
  bg: string;
  overlay: string;
  index: number;
}

export interface Screen {
  component: FC<ScreenComponentProps>;
  img: string;
  overlay: string;
  name: string;
  id: string;
}

export interface SpeciesSlide {
  avatar: string;
  globe: string;
  text: string;
}
