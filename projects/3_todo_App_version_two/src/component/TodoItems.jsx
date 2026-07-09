import TodoItem from "./todoitem";

const TodoItems = ({ todos }) => {
  return (
    <>
      {todos.map((items) => (
        <TodoItem todoName={items.name} todoDate={items.date} />
      ))}
    </>
  );
};

export default TodoItems