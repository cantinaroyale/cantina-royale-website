import React from "react";
import { screens, SCROLL_DURATION } from "../../consts";
const { FullPage, Slide } = require("react-full-page");

interface Props {
  setScreen: (val: number) => void;
}

function Screens({ setScreen }: Props) {
  const beforeChange = ({ from, to }: { from: number; to: number }) => {
    setScreen(to);
  };
  return (
    <div className="screens">
      <FullPage duration={SCROLL_DURATION} beforeChange={beforeChange}>
        {screens.map((screen, index) => {
          const { component: Component } = screen;
          return (
            <Slide key = {index}>
              <Component />
            </Slide>
          );
        })}
      </FullPage>
    </div>
  );
}

export default Screens;
