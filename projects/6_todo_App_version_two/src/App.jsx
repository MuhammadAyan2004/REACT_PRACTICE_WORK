import TodoName from "./component/TodoTitle";
import AddTodo from "./component/addTodo";
import TodoItems from "./component/TodoItems";
import "./Apps.css";
import { useState } from "react";

function App() {
  // const todoItems = [
  //   {
  //     name: "meeting with Tech solution company",
  //     date: "7/7/2026",
  //   },
  //   {
  //     name: "lunch with desginers",
  //     date: "7/7/2026",
  //   }
  // ];

  let [todoItems, setTodoItems] = useState([]);
  let [todos, setTodos] = useState("");
  let [Date, setDate] = useState("");

  const todoName = (e) => {
    let todoInput = e.target.value;
    setTodos(todoInput);
  };
  const todoDate = (e) => {
    let dateInput = e.target.value;
    setDate(dateInput);
  };

  const clickToAdd = () => {
    let newTodo = [...todoItems, { name: todos, date: Date }];
    setTodoItems(newTodo);
    setTodos('')
    setDate('')
  };

  return (
    <center>
      <div className="main">
        <TodoName />
        <AddTodo addTodo={clickToAdd} todoName={todoName} todoDate={todoDate} />
        <TodoItems todos={todoItems} />
      </div>
    </center>
  );
}

export default App;
