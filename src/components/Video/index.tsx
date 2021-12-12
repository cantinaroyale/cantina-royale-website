import { useEffect, useRef } from "react";

interface Props {
  id?: string;
  className?: string;
  poster?: string;
  src?: string;
  play: boolean;
}

const Video = ({ id = "", className = "", poster = "", src, play }: Props) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (play) {
      ref.current.play();
    } else if (ref.current.currentTime > 0) {
      ref.current.pause();
    }
  }, [play]);

  return (
    <video
      ref={ref}
      loop
      muted
      id={id}
      playsInline
      preload="auto"
      className={className}
      poster={poster}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
};

export default Video;
