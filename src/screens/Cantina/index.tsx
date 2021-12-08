import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import animations from "../../animations";
import { ScreenComponentProps } from "../../types";

function Cantina({ isActive }: ScreenComponentProps) {
  const { t } = useTranslation("cantina");
  return (
    <div
      className={`cantina screen ${
        isActive ? animations.fadeIn : animations.fadeOut
      }`}
    >
      {/* <Circles generateLink = {generateLink} /> */}
      <ReactMarkdown
        children={t("title")}
        className="cantina-title"
        components={{ h2: "h2" }}
      />
      <div className="page-bottom-flex">
        <div className="gradiant-text">
          <ReactMarkdown children={t("gradiantTextLine1")} />
          <ReactMarkdown children={t("gradiantTextLine2")} />
        </div>
      </div>
    </div>
  );
}

export default Cantina;
