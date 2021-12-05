import React from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";

import Frame from "../../components/Frame";
import Spinner from "../../components/Spinner";
import images from "../../images";

function Variations() {
  const { t } = useTranslation("variations");
  return (
    <div className="variations">
      <div className="container">
        <h2 className={`title hidden-block`}>
          <ReactMarkdown children={t("title")} />
        </h2>
        <h5 className={`subtitle hidden-block`}>
          <ReactMarkdown children={t("subtitle")} />
        </h5>
        <div className="variations-flex">
          <div className="variations-ape">
            <img
              src={images.variations.globe}
              className={`variations-globe`}
              alt=""
            />
            <Frame>
              <img
                src={images.variations.arrow}
                className={` variations-ape-arrow`}
                alt=""
              />
              <Spinner id="variations-ape-loader" />
              <div
                style={{ width: 320, height: 410, opacity: 0 }}
                id="gameContainer"
                className="ape-figure"
              ></div>
            </Frame>
          </div>
          <div className="variations-video">
            <img
              src={images.variations.overlay}
              className="variations-video-overlay"
              alt=""
            />
            <div className="variations-video-container">
              <img
                src={images.variations.circle}
                className="variations-video-container-circle"
                alt=""
              />
              {/* <Video id='variations-video' /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Variations;
