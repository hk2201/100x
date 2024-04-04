import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LoremIpsum } from "react-lorem-ipsum";

function App() {
  const [val, setVal] = useState(0);
  const [tell, setTell] = useState(false);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2> Para Generator</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          size="50"
          onChange={(e) => {
            setTell(false);
            setVal(e.target.value);
          }}
        ></input>

        <button
          onClick={() => {
            setTell(true);
          }}
        >
          Generate
        </button>
      </div>
      {tell ? (
        <div>
          <LoremIpsum p={val} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
