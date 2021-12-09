import { useEffect, useRef } from "react";
import videos from "../../videos";

const MainVideo = () => {
  const vid = useRef<any>(null);

  useEffect(() => {
    if (vid.current) {
      vid.current.play();
    }
  }, [vid]);
  return <video ref={vid} autoPlay muted loop src={videos.mainVideo}></video>;
};
export default MainVideo;
