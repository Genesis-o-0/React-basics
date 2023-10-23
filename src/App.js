import "./App.css";
import { useState } from "react";
function App() {
  // Working with states
  const [age, setAge] = useState(0);
  // working with useState Hook to tell react to watch over the age variable and trigger a re-render whenever it is changed
  // useState is a Hook which returns an array the contains the current state and the set function that lets you update the state to a different value and trigger a re-render.
  const increaseAge = () => {
    setAge(age + 1);
  };
  return (
    <div className="App">
      {age}
      <br />
      <button onClick={increaseAge}>Increase age</button>
    </div>
  );
}

export default App;
