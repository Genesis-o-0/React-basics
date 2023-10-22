import "./App.css";

function App() {
  // Working with Lists
  const names = ["Jack", "Jessica", "Mike", "Dustin"];

  return (
    <div className="App">
      {names.map((name, index) => {
        return <h1 key={index}>{name}</h1>;
      })}
    </div>
  );
}

export default App;
