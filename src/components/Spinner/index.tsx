import React from "react";

const Spinner = ({ id = "" }) => {
  return <div className="lds-dual-ring spinner" id={id}></div>;
};

export default Spinner;
