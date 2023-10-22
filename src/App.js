import "./App.css";

function App() {
  // Working without states
  let age = 0;
  // this will update the value of age in the console but not in the document
  // react will render this component once at the beginning where age is equal to 0
  // but at the same time react has no clue about the "state" of the age which is increasing in the console!
  // so we need a way to tell react to watch 'current state' of the age variable and update the document based on it
  const increaseAge = () => {
    age += 1;
    console.log(age);
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
