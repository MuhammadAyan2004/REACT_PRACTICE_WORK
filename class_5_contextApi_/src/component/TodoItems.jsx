import { useContext } from "react";
import TodoItem from "./todoitem";
import { TodoItemsContext } from "../store/todoItems_context";

const TodoItems = ({ onClickDelete, onClickEdit }) => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      {todoItems.map((items, index) => (
        <TodoItem
          key={index}
          index={index}
          todoName={items.name}
          todoDate={items.date}
          onClickDelete={onClickDelete}
          onClickEdit={onClickEdit}
        />
      ))}
    </>
  );
};

export default TodoItems