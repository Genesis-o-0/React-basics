import "./App.css";
import { useState } from "react";
function App() {
  // Working with states
  const [show, setShow] = useState(true);

  const handleShow = (show) => {
    setShow(!show);
  };
  return (
    <div className="App">
      {show ? <h1>Shown</h1> : <h1>Hidden</h1>}
      <button onClick={() => handleShow(show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
