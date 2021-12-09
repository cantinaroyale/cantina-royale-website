import animations from "../../animations";
import { screens } from "../../data";
import { useStore } from "../../store";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
function Screens() {
  const { selectScreen, activeScreen, appLoaded, transitionInProgress } =
    useStore();

  const onUp = () => {
    if (!transitionInProgress && activeScreen > 0) {
      selectScreen(activeScreen - 1);
    }
  };
  const onDown = () => {
    if (!transitionInProgress && activeScreen < screens.length - 1) {
      selectScreen(activeScreen + 1);
    }
  };

  return (
    <ReactScrollWheelHandler
      upHandler={onUp}
      downHandler={onDown}
      wheelConfig={[7, 30, 0.05] as any}
    >
      <div className="screens" style={{ opacity: appLoaded ? 1 : 0 }}>
        {screens.map((screen, index) => {
          const { component: Component, overlay } = screen;
          const isActive = activeScreen === index;
          return (
            <div
              className="screen"
              style={{ zIndex: isActive ? 99 : 0 }}
              key={index}
            >
              <img
                src={overlay}
                alt="overlay"
                className={`screen-overlay ${
                  isActive ? animations.fadeIn : animations.fadeOut
                }`}
              />
              <Component isActive={isActive} appLoaded={appLoaded} />
            </div>
          );
        })}
      </div>
    </ReactScrollWheelHandler>
  );
}

export default Screens;
