import { useReducer, useRef, useState } from "react";
import { ItemProvider } from "./todoItemContextProvider";

function TodoReducer(currState, action) {
  let updatedTodo;
  if (action.type === "new_Item") {
    updatedTodo = [...currState, { Name: action.payload.Name }];
  } else if (action.type === "delete_item") {
    updatedTodo = currState.filter((_, i) => action.payload.index !== i);
  } else if (action.type === "Edit_item") {
    let editTodo = [...currState];
    editTodo[action.payload.editIndex] = { Name: action.payload.todoName };
    updatedTodo = editTodo;
  }
  return updatedTodo;
}

const TodoItemProvider = ({ children }) => {
  function initilizer() {
    let data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  }
  const [todoItems, dispatchedTodoItem] = useReducer(
    TodoReducer,
    [],
    initilizer,
  );
  localStorage.setItem("todos", JSON.stringify(todoItems));

  const [todoName, setTodoName] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [initialValue, setValue] = useState("Add");
  let inputRef = useRef();

  function handleAdd(todoName) {
    if (todoName === "") {
      alert("please write something to add");
      return;
    } else if (editIndex !== null) {
      dispatchedTodoItem({
        type: "Edit_item",
        payload: {
          editIndex,
          todoName,
        },
      });
      setEditIndex(null);
      clearInputs();
      setValue("Add");
    } else {
      const newTodo = { type: "new_Item", payload: { Name: todoName } };
      dispatchedTodoItem(newTodo);
      clearInputs();
    }
    inputRef.current.focus();
  }

  function handleDelete(index) {
    dispatchedTodoItem({
      type: "delete_item",
      payload: { index },
    });
  }

  function handleEdit(index) {
    setTodoName(todoItems[index].Name);
    setEditIndex(index);
    inputRef.current.focus();
    setValue("Edit");
  }
  function clearInputs() {
    setTodoName("");
  }

  return (
    <ItemProvider.Provider
      value={{
        handleAdd,
        handleDelete,
        handleEdit,
        todoName,
        initialValue,
        inputRef,
        todoItems,
        setTodoName,
      }}
    >
      {children}
    </ItemProvider.Provider>
  );
};

export default TodoItemProvider;
