import { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import animations from "../../animations";
import { VideoPopup } from "../../components";

import Frame from "../../components/Frame";
import images from "../../images";
import { ScreenComponentProps } from "../../types";
import videos from "../../videos";

function Pvp({ isActive }: ScreenComponentProps) {
  const [showPopup, setShowPopup] = useState(false);
  const { t } = useTranslation("pvp");
  return (
    <div
      className={`pvp screen ${
        isActive ? animations.fadeIn : animations.fadeOut
      }`}
    >
      <VideoPopup
        isActive={showPopup}
        src={videos.mainVideo}
        poster={images.main.bg}
        close={() => setShowPopup(false)}
      />
      <h3 className={`title`}>
        <ReactMarkdown children={t("title")} />
      </h3>
      <div className="page-bottom-flex">
        <div
          className={`gradiant-text ${
            isActive
              ? `${animations.fadeInLeft} smallDelay`
              : animations.fadeOut
          }`}
        >
          <ReactMarkdown children={t("gradiantTextLine1")} />
          <ReactMarkdown children={t("gradiantTextLine2")} />
        </div>

        <Frame
          id="pvp-bottom-frame"
          className={`video-preview ${
            isActive ? `${animations.fadeInUp} smallDelay` : animations.fadeOut
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
    </div>
  );
}

export default Pvp;
