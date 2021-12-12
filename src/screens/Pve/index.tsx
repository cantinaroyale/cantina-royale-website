import { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import animations from "../../animations";
import { Screen, VideoPopup } from "../../components";
import Frame from "../../components/Frame";
import Title from "../../components/Title";

import images from "../../images";
import { ScreenComponentProps } from "../../types";
import videos from "../../videos";

function Pve({ isActive, bg, overlay }: ScreenComponentProps) {
  const [showPopup, setShowPopup] = useState(false);
  const { t } = useTranslation("pve");

  return (
    <Screen id="pve" isActive={isActive} overlay={overlay} bg={bg}>
      <VideoPopup
        isActive={showPopup}
        src={videos.mainVideo}
        poster={images.main.bg}
        close={() => setShowPopup(false)}
      />

      <Title
        text={<ReactMarkdown children={t("title")} />}
        isActive={isActive}
      />
      <div className="page-bottom-flex">
        <div
          className={`gradiant-text ${
            isActive ? `${animations.fadeInLeft} ` : animations.fadeOut
          }`}
        >
          <ReactMarkdown children={t("gradiantTextLine1")} />
          <ReactMarkdown children={t("gradiantTextLine2")} />
        </div>

        <Frame
          id="pve-bottom-frame "
          className={`video-preview ${
            isActive ? `${animations.fadeInRight} ` : animations.fadeOut
          }`}
          onClick={() => setShowPopup(true)}
        >
          <img
            src={images.pve.videoPreview}
            className="video-preview-img"
            alt="video"
          />
          <img src={images.shared.play} className="play" alt="play" />
        </Frame>
      </div>
    </Screen>
  );
}

export default Pve;
