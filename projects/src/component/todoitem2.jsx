function TodoItem2() {
  let todoName = "lunch with desginers";
  let todoDate = "7/7/2026";
  return (
    <div class="container text-left">
      <div class="row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
