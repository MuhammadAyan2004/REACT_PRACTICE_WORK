import "./App.css";
import ClockName from "./component/clockName";
import Slogan from "./component/slogan";
import CurrentTime from "./component/currentTime";

function App() {
  return (
    <center>
      <div>
        <ClockName></ClockName>
        <Slogan></Slogan>
        <CurrentTime></CurrentTime>
      </div>
    </center>
  );
}

export default App;
