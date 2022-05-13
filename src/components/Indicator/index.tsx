import animations from "../../animations";
import { screens } from "../../data";
import images from "../../images";
import { useStore } from "../../store";
import Figure from "./Figure";

function Indicator() {
  const { activeScreen, selectScreen, appLoaded } = useStore();
  const hide = activeScreen === 0;
  if (!appLoaded) {
    return null;
  }
  return (
    <div
      className={`indicator ${
        hide ? animations.fadeOutRight : animations.fadeInRight
      }`}
    >
      <img
        src={images.shared.indicatorLine}
        className="indicator-line"
        alt="indicator line"
      />
      {screens.map((screen, index) => {
        return (
          <section
            onClick={() => selectScreen(index)}
            id={index === activeScreen ? "selected-section" : ""}
            className="indicator-section"
            key={index}
          >
            <button className="indicator-section-btn">{screen.name}</button>
            <Figure />
          </section>
        );
      })}
      {/* <section
        onClick={() => window.open("https://whitepaper.cantinaroyale.io")}
        className="indicator-section"
      >
        <button className="indicator-section-btn">Whitepaper</button>
        <Figure />
      </section> */}
    </div>
  );
}

export default Indicator;