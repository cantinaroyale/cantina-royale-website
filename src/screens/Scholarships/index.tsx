import React from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import animations from "../../animations";
import { Screen } from "../../components";
import Frame from "../../components/Frame";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import images from "../../images";
import { ScreenComponentProps } from "../../types";

function Scholarships({ isActive, bg, overlay }: ScreenComponentProps) {
  const { t } = useTranslation("scholarships");
  return (
    <Screen id="scholarships" isActive={isActive} overlay={overlay} bg={bg}>
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
          <a href="/" className="scholarships-medium" target="_blank">
            <img src={images.scholarships.post} alt="post" />
            <h4>{t("postTitle")}</h4>
            <p>{t("postText")}</p>
          </a>
        </Frame>
      </div>
    </Screen>
  );
}

export default Scholarships;