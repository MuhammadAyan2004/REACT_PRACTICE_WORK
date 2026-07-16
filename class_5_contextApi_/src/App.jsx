import TodoName from "./component/TodoTitle";
import AddTodo from "./component/addTodo";
import TodoItems from "./component/TodoItems";
import "./Apps.css";
import { useState, useRef, useEffect } from "react";
import { TodoItemsContext } from "./store/todoItems_context";

function App() {
  const [todoItems, setTodoItems] = useState(() => {
    const data = localStorage.getItem("todo-list");
    return data ? JSON.parse(data) : [];
  });
  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todoItems));
  }, [todoItems]);

  let todoNameElem = useRef("");
  let todoDateElem = useRef("");
  const [editIndex, setEditIndex] = useState(null);

  const clickToAdd = (name, dueDate) => {
    let todoName = name.current.value;
    let date = dueDate.current.value;

    if (todoName.trim() == "" || date == "") {
      alert("please enter values in the required field");
      return;
    }
    if (editIndex !== null) {
      setTodoItems((prevTodo) => {
        const updatedTodo = [...prevTodo];
        updatedTodo[editIndex] = { name: todoName, date: date };
        return updatedTodo;
      });

      setEditIndex(null);
      clearInputs();
    } else {
      setTodoItems((newTodo) => [...newTodo, { name: todoName, date: date }]);
      clearInputs();
    }
  };

  const handleDeleteButton = (index) => {
    const newTodo = todoItems.filter((_, i) => i !== index);
    setTodoItems(newTodo);
  };
  const handleEditButton = (index) => {
    todoNameElem.current.value = todoItems[index].name;
    todoDateElem.current.value = todoItems[index].date;
    setEditIndex(index);
  };

  function clearInputs() {
    todoNameElem.current.value = "";
    todoDateElem.current.value = "";
  }

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        clickToAdd,
        handleDeleteButton,
        handleEditButton,
        todoNameElem,
        todoDateElem,
      }}
    >
      <center>
        <div className="main">
          <TodoName />
          <AddTodo />
          <TodoItems />
        </div>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
