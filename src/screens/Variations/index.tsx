import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import animations from "../../animations";

import UnityElement from "../../components/UnityElement";
import Video from "../../components/Video";
import { UNITY_INTERVAL } from "../../consts";
import images from "../../images";
import { ScreenComponentProps } from "../../types";
import { delay } from "../../utils";
import videos from "../../videos";

function Variations({ isActive }: ScreenComponentProps) {
  const videoRef: any = useRef(null);
  const { t } = useTranslation("variations");

  useEffect(() => {
    const handleVideo = async () => {
      if (isActive && videoRef.current) {
        await delay(500);
        videoRef.current.play();
      }
    };
    handleVideo();
  }, [isActive]);

  return (
    <div
      className={`variations screen ${
        isActive ? animations.fadeIn : animations.fadeOut
      }`}
    >
      <h2 className={`title`}>
        <ReactMarkdown children={t("title")} />
      </h2>
      <h5 className={`subtitle`}>
        <ReactMarkdown children={t("subtitle")} />
      </h5>
      <div className="variations-flex">
        <div className="variations-ape">
          <img
            src={images.variations.globe}
            className={`variations-globe`}
            alt=""
          />

          <UnityElement
            play={isActive}
            canvasId="variations-unity"
            loadTimeout={1400}
            width={320}
            height={410}
            intervalTime={UNITY_INTERVAL}
          >
            <img
              src={images.variations.arrow}
              className={` variations-ape-arrow`}
              alt=""
            />
          </UnityElement>
        </div>
        <div className="variations-video">
          <img
            src={images.variations.overlay}
            className="variations-video-overlay"
            alt=""
          />
          <div className="variations-video-container">
            <img
              src={images.variations.circle}
              className="variations-video-container-circle"
              alt=""
            />
            {isActive && (
              <Video
                id="variations-video"
                src={videos.mainVideo}
                ref={videoRef}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Variations;
