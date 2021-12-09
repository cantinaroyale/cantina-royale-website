import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import animations from "../../animations";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
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
      await delay(500);
      if (isActive && videoRef.current) {
        videoRef.current.play();
      }
    };
    handleVideo();
  }, [isActive]);

  return (
    <div
      className={`variations screen-content ${
        isActive ? animations.fadeIn : animations.fadeOut
      }`}
    >
      <Title
        text={<ReactMarkdown children={t("title")} />}
        isActive={isActive}
      />

      <Subtitle
        text={<ReactMarkdown children={t("subtitle")} />}
        isActive={isActive}
      />
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
        <div
          className={`variations-video ${
            isActive ? animations.fadeIn : animations.fadeOut
          }`}
        >
          <img
            src={images.variations.overlay}
            className="variations-video-overlay"
            alt=""
          />
          <div className={`variations-video-container`}>
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
