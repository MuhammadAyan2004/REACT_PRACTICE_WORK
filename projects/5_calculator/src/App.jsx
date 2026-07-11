import styles from "./App.module.css";
import Display from "./component/display";
import ButtonContainer from "./component/buttonContainer";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  let [currentValue, setEvalvalue] = useState("");
  const onclickButton = (e) => {
    let value = e.target.innerHTML;
    if (value === "AC") {
      setEvalvalue("");
    } else if (value === "C") {
      let subvalue = currentValue.substring(0, currentValue.length - 1);
      setEvalvalue(subvalue);
    } else if (value === "=") {
      try {
        let result = evaluate(currentValue);
        setEvalvalue(result.toString());
      } catch (err) {
        setEvalvalue(err);
      }
    } else {
      let newValue = currentValue + value;
      setEvalvalue(newValue);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Calculator</h1>
      <Display displayValue={currentValue} />
      <ButtonContainer clicked={(e) => onclickButton(e)} />
    </div>
  );
}

export default App;
