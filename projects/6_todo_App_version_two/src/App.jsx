import TodoName from "./component/TodoTitle";
import AddTodo from "./component/addTodo";
import TodoItems from "./component/TodoItems";
import "./Apps.css";
import { useEffect, useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState(() => {
    const data = localStorage.getItem("todo-list");
    return data ? JSON.parse(data) : [];
  });
  const [todoName, setTodoName] = useState("");
  const [date, setDate] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todoItems));
  }, [todoItems]);

  const clickToAdd = (todoName, date) => {
    if (todoName.trim() === "" || date === "") {
      alert("please enter values in the required field");
      return;
    }
    if (editIndex !== null) {
      const updatedTodos = [...todoItems];
      updatedTodos[editIndex] = { name: todoName, date: date };
      setTodoItems(updatedTodos);
      setEditIndex(null);
      clearInputs();
    } else {
      let newTodo = [...todoItems, { name: todoName, date: date }];
      setTodoItems(newTodo);
      clearInputs();
    }
  };

  const handleDeleteButton = (index) => {
    const newTodo = todoItems.filter((_, i) => i !== index);
    setTodoItems(newTodo);
  };
  const handleEditButton = (index) => {
    setTodoName(todoItems[index].name);
    setDate(todoItems[index].date);
    setEditIndex(index);
  };

  function clearInputs() {
    setTodoName("");
    setDate("");
  }

  return (
    <center>
      <div className="main">
        <TodoName />
        <AddTodo
          addTodo={clickToAdd}
          todoName={todoName}
          todoDate={date}
          handleTodoName={setTodoName}
          handleTodoDate={setDate}
        />
        <TodoItems
          todos={todoItems}
          onClickDelete={handleDeleteButton}
          onClickEdit={handleEditButton}
        />
      </div>
    </center>
  );
}

export default App;
