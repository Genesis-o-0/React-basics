import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

// Using Axios.js
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res);
      setAge(res.data.age)
    });
  };
  const getInputValue = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="App">
      <input type="text" placeholder="Enter a name" onChange={getInputValue} />
      <button onClick={fetchData}>Predict Age</button>
      <h1>Predicted age: {age}</h1>
    </div>
  );
}

export default App;
