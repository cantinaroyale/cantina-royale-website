import React from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import Slider from "../../components/Slider";
import { SpeciesSlide } from "../../types";
import { speciesSlides } from "./data";
import Slide from "./Slide";

function Species() {
  const { t } = useTranslation("species");
  return (
    <div className="species">
      <div className="container hidden-flex">
        {/* <Circles generateLink = {generateLink} /> */}

        <h2 className="title">
          <ReactMarkdown children={t("title")} />
        </h2>
        <h4 className="subtitle">
          <ReactMarkdown children={t("subtitle")} />
        </h4>
        {/* <Slider<SpeciesSlide> slides={speciesSlides} component={Slide} /> */}
        <h5 className="species-bottom-text">
          <ReactMarkdown children={t("bottomText")} />
        </h5>
      </div>
    </div>
  );
}

export default Species;
