import React from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import Frame from "../../components/Frame";

function Scholarships() {
  const { t } = useTranslation("scholarships");
  return (
    <div className="scholarships">
      <div className="container hidden-flex">
        <h3 className={`title`}>
          <ReactMarkdown children={t("title")} />
        </h3>
        <h5 className="subtitle">
          <ReactMarkdown children={t("subtitle")} />
        </h5>
        <div className="page-bottom-flex">
          <div className="gradiant-text">
            <p>Lorem ipsum dolor sit amet,</p>
            <p>consectetur adipiscing elit ut lorem,</p>
            <p>purus sit amet luctus venenatis</p>
          </div>

          <Frame
            id="scholarships-frame"
            className={`animate__delay-2s base-delay`}
          >
            <a href="/" className="scholarships-medium">
              <p>Medium Post Title</p>
            </a>
          </Frame>
        </div>
      </div>
    </div>
  );
}

export default Scholarships;
