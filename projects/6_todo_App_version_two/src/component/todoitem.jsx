import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

function TodoItem({ todoName, todoDate, onClickDelete, onClickEdit, index }) {
  return (
    <div className="container text">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-3">{todoDate}</div>
        <div className="col-3 btnSec">
          <button
            type="button"
            className="btn btn-success button"
            onClick={() => onClickEdit(index)}
          >
            <CiEdit />
          </button>

          <button
            type="button"
            className="btn btn-danger button"
            onClick={() => onClickDelete(index)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
