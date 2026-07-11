import styles from "./App.module.css";
import Display from "./component/display";
import ButtonContainer from "./component/buttonContainer";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Calculator</h1>
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default App;
