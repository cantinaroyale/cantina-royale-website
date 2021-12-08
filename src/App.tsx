import "./i18";
import "animate.css";
import { Screens, Transitions } from "./Containers";
import AppLoader from "./components/AppLoader";
import { Indicator } from "./components";

function App() {
  return (
    <div className="App">
      <AppLoader />
      <Transitions />
      <Screens />
      <Indicator />
    </div>
  );
}

export default App;
