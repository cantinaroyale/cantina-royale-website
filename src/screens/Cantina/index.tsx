import React from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";

function Cantina() {
  const { t } = useTranslation("cantina");
  return (
    <div className="cantina">
      <div className="container hidden-flex">
        {/* <Circles generateLink = {generateLink} /> */}
        <h2 className="title">
          <ReactMarkdown children={t("title")} />
        </h2>
        <div className="page-bottom-flex">
          <div className="gradiant-text">
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet,
            </p>
            <p>consectetur adipiscing elit ut lorem,</p>
            <p>purus sit amet luctus venenatis</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cantina;
