import { useContext } from "react";
import { ItemProvider } from "../store/todoItemContextProvider";

function TodoItem({ todo, index }) {
  let { handleDelete, handleEdit } = useContext(ItemProvider);
  return (
    <div className="container containerAlign">
      <div className="row insideAlign">
        <div className="col-7">{todo.Name}</div>
        <div className="col-2">
          <button
            className="btn btn-primary "
            onClick={() => handleEdit(index)}
          >
            Edit
          </button>
        </div>
        <div className="col-2">
          <button
            className="btn btn-success"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
