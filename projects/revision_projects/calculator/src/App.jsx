import {useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const buttons = [
    "AC",
    "Del",
    "+",
    "-",
    "9",
    "8",
    "7",
    "*",
    "6",
    "5",
    "4",
    "/",
    "3",
    "2",
    "1",
    "%",
    "0",
    "00",
    ".",
    "=",
  ];
  const [currentValue, setValue] = useState("");

  function handleClickBtn(e) {
    let targetElem = e.target.innerHTML;
    if (targetElem === "AC") {
      setValue("");
    } else if (targetElem === "Del") {
      let subVal = currentValue.substring(0, currentValue.length - 1);
      setValue(subVal)
    } else if (targetElem === "=") {
      let result = evaluate(currentValue);
      setValue(result)
    } else {
        let newVal = currentValue + targetElem
        setValue(newVal)  
    }
  }

  return (
    <>
      <div className="w-full min-h-screen bg-black flex justify-center items-center">
        <div className="w-[70vh] border border-gray-700 rounded-lg p-4">
          <input
            type="text"
            className="w-full h-12 rounded-lg p-2 pr-4 tracking-[5px] border-none outline-none bg-transparent shadow-gray-400 shadow-[inset_0_2px_10px_gray,0_2px_5px_gray] text-white text-3xl text-right"
            value={currentValue}
            readOnly
          />
          <div className="w-full flex gap-4 flex-wrap justify-between text-white mt-2 p-4">
            {buttons.map((btn) => {
              return (
                <button
                  key={btn}
                  className="bg-gray-700 p-3 rounded-md w-[10vh] text-2xl"
                  onClick={(e) => handleClickBtn(e)}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
