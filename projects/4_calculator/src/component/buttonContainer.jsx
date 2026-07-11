import styles from "./buttonContainer.module.css"
const ButtonContainer = ()=>{
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
    "="
  ];
    return (
      <div className={styles.buttonContainer}>
        {buttonName.map((bName) => (
          <button className={styles.btn}>{bName}</button>
        ))}
      </div>
    );
}

export default ButtonContainer