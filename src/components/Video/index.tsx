import React, { forwardRef } from "react";

interface Props {
  id?: string;
  className?: string;
  poster?: string;
  src?: string;
  ref?: any;
}

const Video = forwardRef((props: Props, ref: any) => {
  const { id = "", className = "", poster = "", src } = props;
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
});

export default Video;
