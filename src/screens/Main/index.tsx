import Scroller from "../../components/Scroller";
import ReactMarkdown from "react-markdown";
import { ScreenComponentProps } from "../../types";
import { useTranslation } from "react-i18next";
import { Screen } from "../../components";
import Video from "../../components/Video";
import videos from "../../videos";
import { useEffect, useState } from "react";
import { delay } from "../../utils";

function Main({
  isActive,
  bg,
  overlay,
  appLoaded,
  index,
}: ScreenComponentProps) {
  const { t } = useTranslation("main");
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const handlePlay = async () => {
      await delay(300);
      setPlay(true);
    };

    if (isActive && appLoaded) {
      handlePlay();
    } else if (!isActive) {
      setPlay(false);
    }
  }, [isActive, appLoaded]);

  return (
    <Screen
      id="main"
      isActive={isActive}
      overlay={overlay}
      bg={bg}
      index={index}
      isMainPage
      content={
        <Video
          play={play}
          className="full-screen-video"
          id="main-video"
          src={videos.mainVideo}
        />
      }
    >
      <Scroller />

      <div className="page-bottom-flex">
        <div className="gradiant-text">
          <ReactMarkdown children={t("gradiantTextLine1")} />
          <ReactMarkdown children={t("gradiantTextLine2")} />
          <ReactMarkdown children={t("gradiantTextLine3")} />
        </div>
      </div>
    </Screen>
  );
}

export default Main;
