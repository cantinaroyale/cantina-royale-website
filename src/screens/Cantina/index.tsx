import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import animations from "../../animations";
import { Screen } from "../../components";
import Title from "../../components/Title";
import { ScreenComponentProps } from "../../types";

function Cantina({ isActive, bg, overlay }: ScreenComponentProps) {
  const { t } = useTranslation("cantina");
  return (
    <Screen id="cantina" isActive={isActive} bg={bg} overlay={overlay}>
      {/* <Curves show={isActive} /> */}
      <Title id="cantina-title" text={t("title")} isActive={isActive} />
      <div className="page-bottom-flex">
        
        <div
          className={`gradiant-text ${
            isActive ? animations.slideInLeft : animations.slideOutLeft
          }`}
        >
          <ReactMarkdown children={t("gradiantTextLine1")} />
          <ReactMarkdown children={t("gradiantTextLine2")} />
        </div>
      </div>
    </Screen>
  );
}

export default Cantina;
