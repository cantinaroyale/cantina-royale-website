import React, { useState } from "react";
import Screens from "./components/Screens";
import Transitions from "./components/Transitions";
import { overlays } from "./consts";

function App() {
  const [screen, setScreen] = useState(0);
  return (
    <div className="App">
      {overlays.map((overlay, index) => {
          if(index === screen ){
            return <img key = {index} className='overlay' src = {overlay} alt = 'overlay' />
          }
          return null
        
      })}
      <Transitions screen = {screen} />
      <Screens setScreen={setScreen} />
    </div>
  );
}

export default App;
