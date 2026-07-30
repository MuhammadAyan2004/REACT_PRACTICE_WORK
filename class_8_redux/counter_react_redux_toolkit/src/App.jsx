import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/heading";
import DisplayValue from "./components/displayValue";
import PrivacyToogle from "./components/privacyToogle";
import Controls from "./components/controls";
import { useSelector } from "react-redux";

function App() {
 const privacy = useSelector((store) => store.privacy);
 console.log(privacy)
  return (
    <div className="bg-dark text-secondary px-4 py-5 ">
      <div className="py-5 ">
        <Heading />
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyToogle /> : <DisplayValue />}
          <Controls />
        </div>
      </div>
    </div>
  );
}

export default App;
