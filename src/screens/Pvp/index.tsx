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

function Pvp({ isActive, bg, overlay }: ScreenComponentProps) {
  const [showPopup, setShowPopup] = useState(false);
  const { t } = useTranslation("pvp");
  return (
    <Screen id="pvp" isActive={isActive} overlay={overlay} bg={bg}>
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
            isActive ? `${animations.fadeInUp} ` : animations.fadeOutDown
          }`}
        >
          <ReactMarkdown children={t("gradiantTextLine1")} />
          <ReactMarkdown children={t("gradiantTextLine2")} />
        </div>

        <Frame
          id="pvp-bottom-frame"
          className={`video-preview ${
            isActive ? `${animations.fadeInUp} ` : animations.fadeOutDown
          }`}
          onClick={() => setShowPopup(true)}
        >
          <img
            src={images.pvp.videoPreview}
            className="video-preview-img"
            alt="video"
          />
          <img src={images.shared.play} className="play" alt="play" />
        </Frame>
      </div>
    </Screen>
  );
}

export default Pvp;