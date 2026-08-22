import "./app.css";
import Footer from "../components/footer";
import Header from "../components/header";
import { Outlet } from "react-router";
import FetchItems from "../components/fetchItems";
import { useSelector } from "react-redux";
import LoadingSpiner from "../components/loadingSpinner";

function App() {
  const fetchStatus = useSelector((state) => state.fetchSlice);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpiner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
