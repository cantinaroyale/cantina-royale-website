import { useEffect, useRef } from "react";
import animations from "../../animations";
import { SCROLL_DURATION } from "../../consts";
import { screens } from "../../data";
import { useStore } from "../../store";
const { FullPage, Slide } = require("react-full-page");

function Screens() {
  const ref = useRef<any>(null);
  const { selectScreen, activeScreen, appLoaded } = useStore();
  const beforeChange = ({ from, to }: { from: number; to: number }) => {
    selectScreen(to);
  };

  useEffect(() => {
    if (ref.current) {
      const currentSlide = ref.current.getCurrentSlideIndex();
      if (currentSlide !== activeScreen) {
        ref.current.scrollToSlide(activeScreen);
      }
    }
  }, [activeScreen]);

  return (
    <div className="screens" style={{ opacity: appLoaded ? 1 : 0 }}>
      <FullPage
        ref={ref}
        duration={SCROLL_DURATION}
        beforeChange={beforeChange}
        initialSlide={0}
      >
        {screens.map((screen, index) => {
          const { component: Component, overlay } = screen;
          const isActive = activeScreen === index;
          return (
            <Slide key={index}>
              <div className="slide">
                <img
                  src={overlay}
                  alt="overlay"
                  className={`overlay ${
                    isActive ? animations.fadeIn : animations.fadeOut
                  }`}
                />
                <Component isActive={isActive} appLoaded={appLoaded} />
              </div>
            </Slide>
          );
        })}
      </FullPage>
    </div>
  );
}

export default Screens;
