import styles from "./buttonContainer.module.css"
const ButtonContainer = ({ clicked }) => {
  let buttonName = [
    "AC",
    "C",
    "+",
    "-",
    "1",
    "2",
    "3",
    "*",
    "4",
    "5",
    "6",
    "/",
    "7",
    "8",
    "9",
    "%",
    "00",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonName.map((bName) => (
        <button key={bName} className={styles.btn} onClick={clicked}>
          {bName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer