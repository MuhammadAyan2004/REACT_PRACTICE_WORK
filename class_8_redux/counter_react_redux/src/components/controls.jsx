const Controls = ()=>{
    return (
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
        >
          +1
        </button>
        <button type="button" className="btn btn-outline-light btn-lg px-4">
          -1
        </button>
      </div>
    );
}

export default Controls