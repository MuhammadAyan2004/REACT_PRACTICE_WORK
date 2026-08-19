const LoadingSpiner = ()=>{
    return (
      <center>
      <div
        className="spinner-border"
        style={{"width": "3rem","height": "3rem", "marginBlock":"10vh"}}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      </center>
    );
}

export default LoadingSpiner