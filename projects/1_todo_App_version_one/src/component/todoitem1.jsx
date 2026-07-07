function TodoItem1() {
  let todoName = "meeting with Tech solution company";
  let todoDate = "7/7/2026";
  return (
    <div class="container text">
      <div class="row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
