import React from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import animations from "../../animations";
import { Curves } from "../../components";
import Slider from "../../components/Slider";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import { ScreenComponentProps } from "../../types";
import { speciesSlides } from "./data";
import Slide from "./Slide";

function Species({ isActive }: ScreenComponentProps) {
  const { t } = useTranslation("species");
  return (
    <div
      className={`species screen-content ${
        isActive ? animations.fadeIn : animations.fadeOut
      }`}
    >
      <Curves show={isActive} />

      <Title
        text={<ReactMarkdown children={t("title")} />}
        isActive={isActive}
      />
      <Subtitle
        text={<ReactMarkdown children={t("subtitle")} />}
        isActive={isActive}
      />
      <Slider slides={speciesSlides} component={Slide} show={true} />
      <h5
        className={`species-bottom-text ${
          isActive ? animations.slideInUp : animations.slideOutDown
        }`}
      >
        <ReactMarkdown children={t("bottomText")} />
      </h5>
    </div>
  );
}

export default Species;
