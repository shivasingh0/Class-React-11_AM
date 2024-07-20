import { useState } from "react";
import "./Todo.css"

function Todo() {
    const [todo, setTodo] = useState()

    function handleValue(e) {
        setTodo(e.target.value)
        console.log(todo);
    }

  return (
    <div className="main-div">
      <h1>Todo</h1>
      <input onChange={handleValue} className="input" placeholder="Enter your task" type="text" />
      <button className="btn">Add Task</button>
    </div>
  );
}

export default Todo;
