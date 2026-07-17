import { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { TodoItemsContext } from "../store/todoItems_context";

function AddTodo() {
  const { clickToAdd, todoNameElem, todoDateElem } = useContext(TodoItemsContext);
  
  return (
    <div className="container inputContainer">
      <div className="row text">
        <div className="col-6">
          <input type="text" placeholder="Enter your Todo" ref={todoNameElem} />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElem} />
        </div>
        <div className="col-2 ">
          <button
            type="button"
            className="btn btn-success button"
            onClick={() => clickToAdd(todoNameElem, todoDateElem)}
          >
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo