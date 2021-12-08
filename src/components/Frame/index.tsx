import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
  onClick?: () => void;
}

function Frame({ children, id = "", className = "", onClick }: Props) {
  return (
    <div
      className={`frame ${className}`}
      id={id}
      onClick={onClick ? onClick : () => {}}
    >
      <div className="frame-blur"></div>
      <div className="frame-inner">
        <div className="frame-inner-content">{children}</div>
      </div>
    </div>
  );
}

export default Frame;
