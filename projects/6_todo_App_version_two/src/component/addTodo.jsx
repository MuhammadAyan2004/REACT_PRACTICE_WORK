function AddTodo({ addTodo, todoName, todoDate }) {
  return (
    <div className="container ">
      <div className="row text">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter your Todo"
            onChange={(e)=>todoName(e)}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={(e)=>todoDate(e)} />
        </div>
        <div className="col-2 ">
          <button
            type="button"
            className="btn btn-success button"
            onClick={addTodo}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo