import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import animations from "../../animations";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import images from "../../images";
import { ScreenComponentProps } from "../../types";
import Container from "./Container";

function Apes({ isActive, bg }: ScreenComponentProps) {
  const { t } = useTranslation("apes");

  return (
    <div
      className={`apes screen-content ${
        isActive ? animations.fadeIn : animations.fadeOut
      }`}
    >
      <img
        src={bg}
        alt=""
        className={`screen-img ${
          isActive ? animations.fadeIn : animations.fadeOut
        }`}
      />
      <Title
        text={<ReactMarkdown children={t("title")} />}
        isActive={isActive}
      />
      <Subtitle
        text={<ReactMarkdown children={t("subtitle")} />}
        isActive={isActive}
      />

      <div className="apes-flex">
        <Container
          canvasId="left-ape"
          loadUnity={isActive}
          coins={images.apes.coins}
          smallApe={images.apes.ape1}
          id="ape-left-container"
          className={isActive ? animations.fadeInLeft : animations.fadeOutLeft}
        />
        <Container
          canvasId="right-ape"
          loadUnity={isActive}
          coins={images.apes.coins}
          smallApe={images.apes.ape2}
          id="ape-right-container"
          className={
            isActive ? animations.fadeInRight : animations.fadeOutRight
          }
        />
      </div>
    </div>
  );
}

export default Apes;
