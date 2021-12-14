import React from "react";
import animations from "../../animations";
import useWindowSize from "../../hooks/useResize";

interface Props {
  bg: string;
  isActive: boolean;
}

function ScreenBg({ bg, isActive }: Props) {
  const { width } = useWindowSize();
  return (
    <img
      src={bg}
      style={{ width: width + 300 }}
      alt=""
      className={`screen-img ${
        isActive ? animations.fadeIn : animations.fadeOut
      }`}
    />
  );
}

export default ScreenBg;
