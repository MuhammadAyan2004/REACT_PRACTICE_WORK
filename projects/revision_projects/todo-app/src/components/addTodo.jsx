import { useContext } from "react";
import { ItemProvider } from "../store/todoItemContextProvider";

const AddTodo = () => {
  let { handleAdd, todoName, setTodoName, inputRef, initialValue } =
    useContext(ItemProvider);

  return (
    <div className="inputArea">
      <input
        type="text"
        placeholder="write your Todo here "
        autoFocus
        className="input"
        ref={inputRef}
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => handleAdd(todoName)}
      >
        {initialValue}
      </button>
    </div>
  );
};

export default AddTodo;
