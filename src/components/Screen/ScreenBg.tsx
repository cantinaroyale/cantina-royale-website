import React from "react";
import animations from "../../animations";
import useWindowSize from "../../hooks/useResize";

interface Props {
  bg: string;
  isActive: boolean;
  stopAnimation?: boolean;
}

function ScreenBg({ bg, isActive, stopAnimation }: Props) {
  const { width } = useWindowSize();
  return (
    <img
      src={bg}
      style={{
        width: width + 500,
        animationDuration: "20s",
        display: isActive ? "block" : "none",
      }}
      alt=""
      id={!stopAnimation ? "screen-img-animation" : ""}
      className={`screen-img ${
        isActive ? animations.fadeIn : animations.fadeOut
      }`}
    />
  );
}

export default ScreenBg;
