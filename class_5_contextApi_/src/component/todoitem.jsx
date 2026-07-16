import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItems_context";

function TodoItem({ todoName, todoDate, index }) {
  const { handleDeleteButton, handleEditButton } = useContext(TodoItemsContext);

  return (
    <div className="container text">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-3">{todoDate}</div>
        <div className="col-3 btnSec">
          <button
            type="button"
            className="btn btn-success button"
            onClick={() => handleEditButton(index)}
          >
            <CiEdit />
          </button>

          <button
            type="button"
            className="btn btn-danger button"
            onClick={() => handleDeleteButton(index)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
