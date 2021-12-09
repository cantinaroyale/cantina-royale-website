import React, { ReactNode } from "react";
import animations from "../../animations";

interface Props {
  id?: string;
  isActive: boolean;
  text: string | ReactNode;
}

function Subtitle({ id = "", isActive, text }: Props) {
  return (
    <div
      id={id}
      className={`subtitle ${
        isActive ? animations.fadeInUp : animations.fadeInDown
      }`}
    >
      {text}
    </div>
  );
}

export default Subtitle;
