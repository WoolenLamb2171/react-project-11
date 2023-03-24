import React, { useState, useRef } from "react";
import { render } from "react-dom";
import useMapBox from "./useMapbox.js";

import "./index.css";

function App() {
  const [random, setRandom] = useState(Math.random());
  const mapRef = useRef();

  useMapBox(mapRef);

  return (
    <>
      <button id="rerender" onClick={() => setRandom(Math.random())}>
        Ререндер!
      </button>
      <div ref={mapRef} id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
