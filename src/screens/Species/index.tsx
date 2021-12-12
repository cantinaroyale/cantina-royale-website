import React, { useEffect, useRef, useState } from "react";
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

function Species({ isActive, bg }: ScreenComponentProps) {
  const { t } = useTranslation("species");
  const [showSlider, setShowSlider] = useState(false);
  const timeout = useRef<any>(null);
  useEffect(() => {
    timeout.current = setTimeout(() => {
      setShowSlider(true);
    }, 1000);
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <div
      className={`species screen-content ${
        isActive ? animations.fadeIn : animations.fadeOut
      }`}
    >
      <img
        src={bg}
        alt=""
        className={`screen-img ${
          isActive ? animations.fadeIn : animations.fadeOut
        }`}
      />
      <Curves show={isActive} />

      <Title
        text={<ReactMarkdown children={t("title")} />}
        isActive={isActive}
      />
      <Subtitle
        text={<ReactMarkdown children={t("subtitle")} />}
        isActive={isActive}
      />
      {showSlider && <Slider slides={speciesSlides} component={Slide} />}
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
