import React from "react";
import { ReactNode } from "react-markdown/lib/react-markdown";
import images from "../../images";

interface Props {
  children: ReactNode;
  blur?: boolean;
  className?: string;
  id?: string;
}

function Popup({ children, id = "", className = "", blur }: Props) {
  return (
    <div className={`popup ${className}`} id={id}>
      <div className="popup-overlay"></div>
      <div className="popup-content">
        {blur && <div className="popup-blur"></div>}
        <button className="popup-content-close">
          <img src={images.shared.close} alt="close" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
