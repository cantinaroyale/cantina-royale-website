import React from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import animations from "../../animations";
import Frame from "../../components/Frame";
import { ScreenComponentProps } from "../../types";

function Scholarships({ isActive }: ScreenComponentProps) {
  const { t } = useTranslation("scholarships");
  return (
    <div
      className={`scholarships screen ${
        isActive ? animations.fadeIn : animations.fadeOut
      }`}
    >
      <h3 className={`title`}>
        <ReactMarkdown children={t("title")} />
      </h3>
      <h5 className="subtitle">
        <ReactMarkdown children={t("subtitle")} />
      </h5>
      <div className="page-bottom-flex">
        <div className="gradiant-text">
          <ReactMarkdown children={t("gradiantTextLine1")} />
          <ReactMarkdown children={t("gradiantTextLine2")} />
          <ReactMarkdown children={t("gradiantTextLine3")} />
        </div>

        <Frame
          id="scholarships-frame"
          className={`animate__delay-2s base-delay`}
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
