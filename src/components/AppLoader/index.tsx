import { useEffect, useState } from "react";
import animations from "../../animations";
import { APP_LOADER_TIMEOUT } from "../../consts";
import images from "../../images";

function AppLoader() {
  const [hide, setHide] = useState(false);
  const [destroy, setDestroy] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, APP_LOADER_TIMEOUT);
  }, []);

  useEffect(() => {
    if (hide) {
      setTimeout(() => {
        setDestroy(true);
      }, 1000);
    }
  }, [hide]);

  return !destroy ? (
    <div className={`app-loader ${hide ? animations.fadeOut : ""}`}>
      <img
        src={images.shared.appLoaderOverlay}
        className="app-loader-overlay"
        alt="loader"
      />
      <img
        src={images.shared.appLoaderBg}
        className="app-loader-bg"
        alt="loader"
      />
      <img
        src={images.shared.appLoaderLogo}
        className="app-loader-img"
        alt="loader"
      />
    </div>
  ) : null;
}

export default AppLoader;
