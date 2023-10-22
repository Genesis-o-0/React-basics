import "./App.css";

// App Component
function App() {
  const name = "Mohamed";
  return (
    <div className="App">
      <User />
    </div>
  );
}

// User Component
const User = () => {
  return (
    <div>
      <h1>Mohamed</h1>
      <h1>27</h1>
      <h1>example@example.com</h1>
    </div>
  );
};

export default App;
