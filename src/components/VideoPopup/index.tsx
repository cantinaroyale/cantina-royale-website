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
        {isActive && (
          <iframe
            allow="autoplay"
            width="100%"
            height="100%"
            frameBorder={"0"}
            src={`https://www.youtube.com/embed/${src}?autoplay=1&cc_load_policy=1&controls=0`}
          ></iframe>
        )}
        {/* <Video play={play} poster={poster} src={src} /> */}
      </Frame>
    </Popup>
  );
}

export default VideoPopup;
