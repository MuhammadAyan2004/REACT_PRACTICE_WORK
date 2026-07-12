import TodoItem from "./todoitem";

const TodoItems = ({ todos }) => {
  return (
    <>
      {todos.map((items) => (
        <TodoItem key={items.name} todoName={items.name} todoDate={items.date} />
      ))}
    </>
  );
};

export default TodoItems