import { useContext } from "react";
import TodoItem from "./todoItem";
import { ItemProvider } from "../store/todoItemContextProvider";

const TodoItems = () => {
  let { todoItems} = useContext(ItemProvider)
  return (
    <>
      {todoItems.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={index}
          index={index}
        />
      ))}
    </>
  );
};

export default TodoItems;
