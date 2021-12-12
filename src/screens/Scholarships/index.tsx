import React from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import animations from "../../animations";
import Frame from "../../components/Frame";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import { ScreenComponentProps } from "../../types";

function Scholarships({ isActive, bg }: ScreenComponentProps) {
  const { t } = useTranslation("scholarships");
  return (
    <div
      className={`scholarships screen-content ${
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
      <Title
        text={<ReactMarkdown children={t("title")} />}
        isActive={isActive}
      />
      <Subtitle
        text={<ReactMarkdown children={t("subtitle")} />}
        isActive={isActive}
      />

      <div className="page-bottom-flex">
        <div
          className={`gradiant-text ${
            isActive ? animations.fadeInUp : animations.fadeOutUp
          }`}
        >
          <ReactMarkdown children={t("gradiantTextLine1")} />
          <ReactMarkdown children={t("gradiantTextLine2")} />
          <ReactMarkdown children={t("gradiantTextLine3")} />
        </div>

        <Frame
          id="scholarships-frame"
          className={isActive ? animations.fadeInUp : animations.fadeOutUp}
        >
          <a href="/" className="scholarships-medium">
            <p>Medium Post Title</p>
          </a>
        </Frame>
      </div>
    </div>
  );
}

export default Scholarships;
