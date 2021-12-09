import React from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import animations from "../../animations";
import { Curves } from "../../components";
import Slider from "../../components/Slider";
import { ScreenComponentProps, SpeciesSlide } from "../../types";
import { speciesSlides } from "./data";
import Slide from "./Slide";

function Species({ isActive }: ScreenComponentProps) {
  const { t } = useTranslation("species");
  return (
    <div
      className={`species screen ${
        isActive ? animations.fadeIn : animations.fadeOut
      }`}
    >
      <Curves show={isActive} />

      <h2 className="title">
        <ReactMarkdown children={t("title")} />
      </h2>
      <h4 className="subtitle">
        <ReactMarkdown children={t("subtitle")} />
      </h4>
      {/* <Slider<SpeciesSlide>
        slides={speciesSlides}
        component={Slide}
        show={isActive}
      /> */}
      <h5 className="species-bottom-text">
        <ReactMarkdown children={t("bottomText")} />
      </h5>
    </div>
  );
}

export default Species;
