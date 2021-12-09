import "./i18";
import "animate.css";
import { isMobile } from "react-device-detect";
import { Screens, Transitions } from "./Containers";
import AppLoader from "./components/AppLoader";
import { Indicator, Navbar } from "./components";
import Mobile from "./components/Mobile";

function App() {
  return (
    <div className="App">
      {isMobile ? (
        <Mobile />
      ) : (
        <>
          <Navbar />
          <AppLoader />
          <Transitions />
          <Screens />
          <Indicator />
        </>
      )}
    </div>
  );
}

export default App;
