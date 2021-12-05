import React from "react";
import Frame from "../../components/Frame";
import Spinner from "../../components/Spinner";

interface Props {
  smallApe: string;
  coins: string;
  id?: string;
}
function Container({ smallApe, coins, id = "" }: Props) {
  return (
    <div className={`ape-container`} id={id}>
      <figure
        className={`ape-figure ape-figure-bottom-small selected  delay-1`}
      />
      <figure
        className={`ape-figure ape-figure-bottom-big selected  delay-2`}
      />
      <figure className="ape-figure ape-figure-top-small selected  delay-3" />
      <figure className="ape-figure ape-figure-top-big  selected delay-4" />
      <img src={smallApe} className="ape-small-ape selected  delay-5" alt="" />
      <Frame className="ape-model">
        <Spinner id={`${id}-loader`} />
        <div
          style={{ width: 250, height: 330, opacity: 0 }}
          id={`${id}-model`}
        ></div>
      </Frame>
      <Frame className="ape-coins selected  delay-6">
        <img src={coins} alt="" />
      </Frame>
    </div>
  );
}

export default Container;
