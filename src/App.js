import "./App.css";

// App Component
function App() {
  // Conditional rendering
  const age = 18;
  const isGreen = true;

  return (
    <div className="App">
      {/* Using Ternary operator for conditional rendering */}
      {age >= 18 ? <h1>Over age</h1> : <h1>Under age</h1>}
      {/* Using Ternary operator for conditional Styling */}
      <h1 style={{ color: isGreen ? "green" : "red" }}>This has a color</h1>
    </div>
  );
}

export default App;
