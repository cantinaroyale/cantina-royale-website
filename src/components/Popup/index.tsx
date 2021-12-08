import { CSSProperties } from "react";
import { ReactNode } from "react-markdown/lib/react-markdown";
import images from "../../images";

interface Props {
  children: ReactNode;
  blur?: boolean;
  className?: string;
  id?: string;
  show?: boolean;
  style?: CSSProperties;
  close: () => void;
  contentClassName?: string;
}

function Popup({
  children,
  id = "",
  className = "",
  blur,
  show,
  style,
  close,
  contentClassName = "",
}: Props) {
  return show ? (
    <div className={`popup  ${className}`} id={id} style={style}>
      <div className="popup-overlay"></div>
      <div className={`popup-content ${contentClassName}`}>
        {blur && <div className="popup-blur"></div>}
        <button className="popup-content-close" onClick={close}>
          <img src={images.shared.close} alt="close" />
        </button>
        {children}
      </div>
    </div>
  ) : null;
}

export default Popup;
