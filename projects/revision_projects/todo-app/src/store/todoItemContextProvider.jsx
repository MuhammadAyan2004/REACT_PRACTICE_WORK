import { createContext } from "react";

export const ItemProvider = createContext({
  todoItems: [],
  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  todoName: "",
  setTodoName: () => {},
  inputRef: "",
  initialValue: "Add",
});
