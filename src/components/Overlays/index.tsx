import React from "react";
import animations from "../../animations";

interface Props {
  overlays: string[];
  activeScreen: number;
}

function Overlays({ overlays, activeScreen }: Props) {
  return (
    <>
      {overlays.map((overlay: string, index: number) => {
        if (index === activeScreen) {
          return (
            <img
              key={index}
              className={`${animations.fadeIn} overlay`}
              src={overlay}
              alt="overlay"
            />
          );
        }
        return null;
      })}
    </>
  );
}

export default Overlays;
