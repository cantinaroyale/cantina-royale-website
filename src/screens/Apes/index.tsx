import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import animations from "../../animations";
import images from "../../images";
import { ScreenComponentProps } from "../../types";
import Container from "./Container";

function Apes({ isActive }: ScreenComponentProps) {
  const { t } = useTranslation("apes");

  return (
    <div
      className={`apes screen ${
        isActive ? animations.fadeIn : animations.fadeOut
      }`}
    >
      <h2 className="title">
        <ReactMarkdown children={t("title")} />
      </h2>
      <h4 className="subtitle">
        <ReactMarkdown children={t("subtitle")} />
      </h4>

      <div className="apes-flex">
        <Container
          canvasId="left-ape"
          loadUnity={isActive}
          coins={images.apes.coins}
          smallApe={images.apes.ape1}
          id="ape-left-container"
        />
        <Container
          canvasId="right-ape"
          loadUnity={isActive}
          coins={images.apes.coins}
          smallApe={images.apes.ape2}
          id="ape-right-container"
        />
      </div>
    </div>
  );
}

export default Apes;
