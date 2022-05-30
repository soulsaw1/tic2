import "./css/App.css";
import Borad from "./Borad";
import Info from "./Info";
import React, { useState } from "react";
import Footer from "./Footer";
function App() {
  const [reset, setReset] = useState(false);

  const [winner, setWinner] = useState("");

  const resetBorad = () => {
    setReset(true);
  };
  return (
    <div className="App">
      <div className={`winner${winner !== "" ? "" : "shrink"}`}>
        <div className="winner-text">{winner}</div>
        <button onClick={() => resetBorad()}>Reset Borad</button>
      </div>
      <Borad
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
      />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
