import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import animations from "../../animations";
import { Screen } from "../../components";
import Slider from "../../components/Slider";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import { ScreenComponentProps } from "../../types";
import { speciesSlides } from "./data";
import Slide from "./Slide";

function Species({ isActive, bg, overlay }: ScreenComponentProps) {
  const { t } = useTranslation("species");

  return (
    <Screen id="species" isActive={isActive} overlay={overlay} bg={bg}>
      {/* <Curves show={isActive} /> */}

      <Title
        text={<ReactMarkdown children={t("title")} />}
        isActive={isActive}
      />
      <Subtitle
        text={<ReactMarkdown children={t("subtitle")} />}
        isActive={isActive}
      />
      <div className={isActive ? animations.zoomIn : animations.zoomOut}>
        <Slider slides={speciesSlides} component={Slide} />
      </div>
      <h5
        className={`species-bottom-text ${
          isActive ? animations.slideInUp : animations.slideOutDown
        }`}
      >
        <ReactMarkdown children={t("bottomText")} />
      </h5>
    </Screen>
  );
}

export default Species;
