import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/heading";
import DisplayValue from "./components/displayValue";
import Controls from "./components/controls";

function App() {
  return (
    <div className="bg-dark text-secondary px-4 py-5 ">
      <div className="py-5 ">
        <Heading />
        <div className="col-lg-6 mx-auto">
          <DisplayValue />
          <Controls />
        </div>
      </div>
    </div>
  );
}

export default App;
