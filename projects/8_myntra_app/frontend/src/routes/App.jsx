import "./app.css";
import Footer from "../components/footer";
import Header from "../components/header";
import { Outlet } from "react-router";

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
