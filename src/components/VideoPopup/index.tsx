import { useEffect, useState } from "react";
import { Popup } from "..";
import animations from "../../animations";
import Frame from "../Frame";
import Video from "../Video";

interface Props {
  isActive: boolean;
  src: string;
  close: () => void;
  poster: string;
}
function VideoPopup({ isActive, src, close, poster }: Props) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const startVideo = async () => {
      setPlay(true);
    };
    if (isActive) {
      startVideo();
    }
  }, [isActive]);

  const onClose = () => {
    setPlay(false);
    close();
  };
  return (
    <Popup
      close={onClose}
      className="video-popup"
      blur
      show={true}
      style={{ display: isActive ? "flex" : "none" }}
      contentClassName={`${animations.fadeInDown} animate__faster`}
    >
      <Frame>
        <Video play={play} poster={poster} src={src} />
      </Frame>
    </Popup>
  );
}

export default VideoPopup;
