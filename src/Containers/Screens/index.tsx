import { screens } from "../../data";
import { useStore } from "../../store";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { Screen } from "../../types";
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
        {screens.map((screen: Screen, index) => {
          const { component: Component, overlay, img: bg } = screen;
          const isActive = activeScreen === index;
          return (
            <Component
              key={index}
              isActive={isActive}
              appLoaded={appLoaded}
              bg={bg}
              overlay={overlay}
              index={index}
            />
          );
        })}
      </div>
    </ReactScrollWheelHandler>
  );
}

export default Screens;
