import React from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";

import Frame from "../../components/Frame";
import Popup from "../../components/Popup";
import images from "../../images";

function Pve() {
  const { t } = useTranslation("pve");
  return (
    <div className="section pve" id="section4" data-anchor="pve">
      <Popup id="pve-popup" className="video-popup" blur>
        <Frame id="pve-popup-frame">
          {/* <Video id='pve-video' poster = {generateLink(images.main.bg)} /> */}
        </Frame>
      </Popup>
      <div className="container hidden-flex">
        <h3 className={`title`}>
          <ReactMarkdown children={t("title")} />
        </h3>
        <div className="page-bottom-flex">
          <div className="gradiant-text">
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet,
            </p>
            <p>consectetur adipiscing elit ut lorem,</p>
            <p>purus sit amet luctus venenatis</p>
          </div>

          <Frame id="pve-bottom-frame" className="video-preview">
            <img
              src={images.pve.videoPreview}
              className="video-preview-img"
              alt="video"
            />
            <img src={images.shared.play} className="play" alt="play" />
          </Frame>
        </div>
      </div>
    </div>
  );
}

export default Pve;
