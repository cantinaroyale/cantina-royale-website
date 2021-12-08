import { useEffect, useRef } from "react";
import animations from "../../animations";
import Scroller from "../../components/Scroller";
import ReactMarkdown from "react-markdown";
import Video from "../../components/Video";
import { ScreenComponentProps } from "../../types";
import { delay } from "../../utils";
import videos from "../../videos";
import { useTranslation } from "react-i18next";

function Main({ isActive, appLoaded }: ScreenComponentProps) {
  const videoRef: any = useRef(null);
  const { t } = useTranslation("main");
  // useEffect(() => {
  //   const handleVideo = async () => {
  //     if (isActive && appLoaded) {
  //       await delay(600);
  //       videoRef.current.play();
  //     } else {
  //       videoRef.current.pause();
  //     }
  //   };
  //   handleVideo();
  // }, [isActive, appLoaded]);
  return (
    <div
      className={`main screen ${
        isActive ? animations.fadeIn : animations.fadeOut
      }`}
    >
      <Scroller />
      <Video
        className="full-screen-video"
        id="main-video"
        src={videos.mainVideo}
        ref={videoRef}
      />

      <div className="page-bottom-flex">
        <div className="gradiant-text">
          <ReactMarkdown children={t("gradiantTextLine1")} />
          <ReactMarkdown children={t("gradiantTextLine2")} />
          <ReactMarkdown children={t("gradiantTextLine3")} />
        </div>
      </div>
    </div>
  );
}

export default Main;
