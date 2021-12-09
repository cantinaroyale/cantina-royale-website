import animations from "../../animations";
import Scroller from "../../components/Scroller";
import ReactMarkdown from "react-markdown";
import { ScreenComponentProps } from "../../types";

import { useTranslation } from "react-i18next";

function Main({ isActive, appLoaded }: ScreenComponentProps) {
  const { t } = useTranslation("main");

  return (
    <div
      className={`main screen-content ${
        isActive ? animations.fadeIn : animations.fadeOut
      }`}
    >
      <Scroller />

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
