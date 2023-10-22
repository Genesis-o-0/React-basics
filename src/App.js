import "./App.css";
import User from "./User";

function App() {
  // Working with an Array of Objects
  const users = [
    { name: "Jack", age: 21 },
    { name: "Jessica", age: 20 },
    { name: "Pedro", age: 18 },
  ];

  return (
    <div className="App">
      {users.map((user, index) => {
        return <User key={index} {...user} />;
      })}
    </div>
  );
}

export default App;
