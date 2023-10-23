import { useState, useEffect } from "react";

const Text = () => {
  const [text, setText] = useState("");
  // Component life cycle
  // Mounting, Updating and unmounting
  // we can use useEffect hook to create actions in a component life cycle
  useEffect(() => {
    console.log("Component Mounted");
    // what about unmounting?! we can return a function using useEffect, this function will run when the component unmount (Cleanup)
    return () => {
      console.log("Component Unmounted");
    };
  }, []); // Empty array is a dependancy which means the useEffect will run once in the Mounting stage, if we specify a dependancy inside the square brackets, it will watch for it and run for every update on it
  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <h1> {text}</h1>
    </div>
  );
};

export default Text;
