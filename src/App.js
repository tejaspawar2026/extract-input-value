import Heading from "./components/Heading";
import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [print, printData] = useState(false);

  function getData(val)
  {
    setData(val.target.value);
    printData(false);
  }

  return (
    <div>
      <Heading />
      {
        print ?
        <span className="output">
          {data}
        </span>
        : null
      }
      <div className="input-group">
        <input type="text" onChange={getData} />
        <button onClick={() => printData(true)} className="submit-btn">Print</button>
      </div>
    </div>
  );
}

export default App;
