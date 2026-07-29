import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElem = useRef();
  const incrementCounter = () => dispatch({ type: "Increment" });
  const decrementCounter = () => dispatch({ type: "Decrement" });
  const PrivacyToogle = () => dispatch({ type: "Privacy" });

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElem.current.value,
      },
    });
    inputElem.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({
      type: "SUB",
      payload: {
        num: inputElem.current.value,
      },
    });
    inputElem.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
          onClick={incrementCounter}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-light btn-lg px-4"
          onClick={decrementCounter}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg px-4"
          onClick={PrivacyToogle}
        >
          Privacy Toogle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controls">
        <input
          type="number"
          min={1}
          placeholder="Enter number"
          ref={inputElem}
          autoFocus
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAdd}
        >
          ADD
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubtract}
        >
          subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
