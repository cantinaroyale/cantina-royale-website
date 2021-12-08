import { useEffect, useRef } from "react";
import { Popup } from "..";
import animations from "../../animations";
import { delay } from "../../utils";
import Frame from "../Frame";
import Video from "../Video";

interface Props {
  isActive: boolean;
  src: string;
  close: () => void;
  poster: string;
}
function VideoPopup({ isActive, src, close, poster }: Props) {
  const videoRef: any = useRef(null);
  useEffect(() => {
    const startVideo = async () => {
      await delay(400);
      videoRef.current.play();
    };
    if (isActive) {
      startVideo();
    }
  }, [isActive]);

  const onClose = () => {
    videoRef.current.pause();
    close();
  };
  return (
    <Popup
      close={onClose}
      className="video-popup"
      blur
      show={true}
      style={{ display: isActive ? "flex" : "none" }}
      contentClassName={`${animations.zoomIn} animate__faster`}
    >
      <Frame>
        <Video ref={videoRef} poster={poster} src={src} />
      </Frame>
    </Popup>
  );
}

export default VideoPopup;
