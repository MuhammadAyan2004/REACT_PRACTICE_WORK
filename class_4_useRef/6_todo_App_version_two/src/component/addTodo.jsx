import { IoMdAdd } from "react-icons/io";

function AddTodo({
  addTodo,
  todoName,
  todoDate,
}) {
  return (
    <div className="container inputContainer">
      <div className="row text">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter your Todo"
            ref={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDate} />
        </div>
        <div className="col-2 ">
          <button
            type="button"
            className="btn btn-success button"
            onClick={() => addTodo(todoName, todoDate)}
          >
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo