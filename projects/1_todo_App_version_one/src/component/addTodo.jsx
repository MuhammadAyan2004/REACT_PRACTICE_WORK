function AddTodo(){
    return (
      <div class="container ">
        <div class="row text">
          <div class="col-6">
            <input type="text" placeholder="Enter your Todo" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2 ">
            <button type="button" class="btn btn-success button">
              ADD
            </button>
          </div>
        </div>
      </div>
    );
}

export default AddTodo