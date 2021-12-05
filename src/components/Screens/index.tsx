import React from "react";
import { Overlays } from "..";
import { SCROLL_DURATION } from "../../consts";
import { screenOverlays, screens } from "../../data/screens";
import { useStore } from "../../store";
const { FullPage, Slide } = require("react-full-page");

function Screens() {
  const { selectScreen, activeScreen } = useStore();
  const beforeChange = ({ from, to }: { from: number; to: number }) => {
    selectScreen(to);
  };
  return (
    <div className="screens">
      <Overlays overlays={screenOverlays} activeScreen={activeScreen} />
      <FullPage
        duration={SCROLL_DURATION}
        beforeChange={beforeChange}
        initialSlide={0}
      >
        {screens.map((screen, index) => {
          const { component: Component } = screen;
          return (
            <Slide key={index} className="screen">
              <Component />
            </Slide>
          );
        })}
      </FullPage>
    </div>
  );
}

export default Screens;
