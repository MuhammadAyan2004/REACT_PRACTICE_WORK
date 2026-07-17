import TodoName from "./component/TodoTitle";
import AddTodo from "./component/addTodo";
import TodoItems from "./component/TodoItems";
import "./Apps.css";
import { useRef, useEffect, useReducer } from "react";
import { TodoItemsContext } from "./store/todoItems_context";

const todoItemsReducer = (currState, action) => {
  let newTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currState,
      { name: action.payload.todoName, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currState.filter(
      (_, index) => index !== action.payload.index,
    );
  } else if (action.type === "EDIT_ITEMS") {
    newTodoItems = [...currState];
    newTodoItems[action.payload.editIndex] = {
      name: action.payload.todoName,
      date: action.payload.date,
    };
  }

  return newTodoItems;
};

function App() {
  const initializer = () => {
    const data = localStorage.getItem("todo-list");
    return data ? JSON.parse(data) : [];
  };
  const [todoItems, dispatchedTodoItems] = useReducer(
    todoItemsReducer,
    [],
    initializer,
  );
  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todoItems));
  }, [todoItems]);

  let todoNameElem = useRef("");
  let todoDateElem = useRef("");
  let editIndex = useRef(null);

  const clickToAdd = (name, dueDate) => {
    let todoName = name.current.value;
    let date = dueDate.current.value;

    if (todoName.trim() == "" || date == "") {
      alert("please enter values in the required field");
      return;
    }
    if (editIndex !== null) {
      const editTodoItems = {
        type: "EDIT_ITEMS",
        payload: { editIndex: editIndex.current, todoName, date },
      };
      dispatchedTodoItems(editTodoItems);
      editIndex.current = null;
      clearInputs();
    } else {
      const newTodoItem = {
        type: "NEW_ITEM",
        payload: { todoName, date },
      };
      dispatchedTodoItems(newTodoItem);
      clearInputs();
    }
  };

  const handleDeleteButton = (index) => {
    const deleteTodoItem = {
      type: "DELETE_ITEM",
      payload: { index },
    };
    dispatchedTodoItems(deleteTodoItem);
  };

  const handleEditButton = (index) => {
    todoNameElem.current.value = todoItems[index].name;
    todoDateElem.current.value = todoItems[index].date;
    editIndex.current = index;
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
