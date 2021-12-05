import React from "react";
import Scroller from "../../components/Scroller";
function Main() {
  return (
    <div className="main">
      <div className="container hidden-flex">
        <Scroller />
        <canvas id="unity-canvas" width="1000" height="1000"></canvas>
      </div>
    </div>
  );
}

export default Main;
