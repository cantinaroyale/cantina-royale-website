import React, { ReactNode } from "react";
import animations from "../../animations";

interface Props {
  id?: string;
  isActive: boolean;
  text: string | ReactNode;
}

function Title({ id = "", isActive, text }: Props) {
  return (
    <div
      id={id}
      className={`title ${
        isActive ? animations.fadeInDown : animations.fadeOutUp
      } `}
    >
      {text}
    </div>
  );
}

export default Title;
