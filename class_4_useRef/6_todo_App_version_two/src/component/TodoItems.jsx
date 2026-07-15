import TodoItem from "./todoitem";

const TodoItems = ({ todos, onClickDelete, onClickEdit }) => {
  return (
    <>
      {todos.map((items, index) => (
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