import "./i18";
import "animate.css";
import { Screens } from "./Containers";
import AppLoader from "./components/AppLoader";
import { Indicator } from "./components";

function App() {
  return (
    <div className="App">
      <AppLoader />
      <Screens />
      <Indicator />
    </div>
  );
}

export default App;
