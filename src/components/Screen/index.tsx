import React from "react";
import { ReactNode } from "react-markdown/lib/react-markdown";
import { Navbar } from "..";
import animations from "../../animations";

interface Props {
  isActive: boolean;
  inAnimation?: string;
  outAnimation?: string;
  id?: string;
  children: ReactNode;
  overlay: string;
  bg: string;
  content?: ReactNode;
  index?: number;
}

function Screen({
  isActive,
  inAnimation = animations.fadeIn,
  outAnimation = animations.fadeOut,
  id = "",
  children,
  overlay,
  bg,
  content,
  index,
}: Props) {
  const className = `screen ${isActive ? inAnimation : outAnimation}`;
  return (
    <div className={className} id={id} style={{ zIndex: isActive ? 99 : 0 }}>
      <Navbar showSoon={index === 0} />
      {content}
      <img
        src={overlay}
        alt="overlay"
        className={`screen-overlay ${
          isActive ? animations.fadeIn : animations.fadeOut
        }`}
      />
      <img
        src={bg}
        alt=""
        className={`screen-img ${
          isActive ? animations.fadeIn : animations.fadeOut
        }`}
      />
      <div className="screen-content">{children}</div>
    </div>
  );
}

export default Screen;
