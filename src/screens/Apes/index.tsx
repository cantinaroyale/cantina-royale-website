import React from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";

import images from "../../images";
import Container from "./Container";

function Apes() {
  const { t } = useTranslation("apes");

  return (
    <div className="section apes" id="section7" data-anchor="apes">
      <div className="container">
        <h2 className="title">
          <ReactMarkdown children={t("title")} />
        </h2>
        <h4 className="subtitle">
          {" "}
          <ReactMarkdown children={t("subtitle")} />
        </h4>

        <div className="apes-flex">
          <Container
            coins={images.apes.coins}
            smallApe={images.apes.ape1}
            id="ape-first-container"
          />
          <Container
            coins={images.apes.coins}
            smallApe={images.apes.ape2}
            id="ape-second-container"
          />
        </div>
      </div>
    </div>
  );
}

export default Apes;
