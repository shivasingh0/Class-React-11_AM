import { useState } from "react";
import "./Todo.css";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleValue(e) {
    setTodo(e.target.value);
  }

  function handleAdd() {
    setTodoList([...todoList, todo])  // destructure the array values
  }

  return (
    <div className="main-div">
      <h1>Todo</h1>
      <input
        onChange={handleValue}
        className="input"
        placeholder="Enter your task"
        type="text"
      />
      <button onClick={handleAdd} className="btn">Add Task</button>
      <ul>
       {
        todoList.map((itemValue)=>(
          <li className="list">{itemValue}</li>
        ))
       }
      </ul>
    </div>
  );
}

export default Todo;
