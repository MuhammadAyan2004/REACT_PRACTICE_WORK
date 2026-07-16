import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  clickToAdd: () => {},
  handleDeleteButton: () => {},
  handleEditButton: () => {},
  todoNameElem:"",
  todoDateElem:"",
});