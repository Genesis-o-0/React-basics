import "./App.css";

// App Component
function App() {
  console.log(<User />);
  /**
   * so <User /> is a Component and an Object with these properties ($$typeof, key, props(this is an Object also), ref, type...etc)
   *
   * Let's focus on props
   * ///////////////////
   * in React documentations it says that "React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions."
   *
   * based on that we can use props to pass parameters-like properties to the component and then use them in rendering
   */
  return (
    <div className="App">
      {/* passing props to the User component */}
      <User name="mohamed" age="26" email="example@example.com" />
      <User name="Sarah" age="30" email="example2@example.com" />
    </div>
  );
}

// User Component
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};
console.log(<User />);

export default App;
