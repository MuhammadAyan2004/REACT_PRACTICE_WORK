// import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

function AddTodo({
  addTodo,
  todoName,
  todoDate,
  handleTodoName,
  handleTodoDate,
}) {
  return (
    <div className="container inputContainer">
      <div className="row text">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter your Todo"
            value={todoName}
            onChange={(e) => handleTodoName(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={(e)=>handleTodoDate(e.target.value)} value={todoDate} />
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