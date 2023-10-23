import "./App.css";
import { useState } from "react";
import Task from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    if (e.target.value.trim()) {
      setNewTask(e.target.value);
    } else {
      setNewTask("");
    }
  };

  const addTask = () => {
    if (newTask) {
      setTodoList([...todoList, newTask]);
    }
  };

  const deleteTask = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task, index) => (
          <Task deleteTask={deleteTask} taskName={task} key={index} i={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
