import { ReactNode } from "react-markdown/lib/react-markdown";
import { Navbar } from "..";
import animations from "../../animations";
import ScreenBg from "./ScreenBg";

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
  isMainPage?: boolean;
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
  isMainPage,
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

      <ScreenBg bg={bg} isActive={isActive} stopAnimation={isMainPage} />

      <div className="screen-content">{children}</div>
    </div>
  );
}

export default Screen;
