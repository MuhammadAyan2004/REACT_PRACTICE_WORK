import DisplayForm from "./components/displayForm";
import DisplayPosts from "./components/displayPosts";
import Footer from "./components/footer";
import Header from "./components/header";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { postActions } from "./store/postSlice";
import { fetchingAction } from "./store/fetchingSlice";

function App() {
  const dispatch = useDispatch()
  const loadingState = useSelector((state) => state.fetching);

  const [selectedTab, setSelectedTab] = useState("Home");

  const handleInitialPost = useCallback((posts) => {
    dispatch(postActions.initialPost(posts));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchingAction.startLoading())
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", {signal})
      .then((res) => res.json())
      .then((obj) => {
        handleInitialPost(obj.posts);
        dispatch(fetchingAction.stopLoading());
      });

    return () => {
      controller.abort();
    };
  }, [handleInitialPost]);

  return (
    <>
        <Header
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Header>
        {selectedTab === "Home" ? (
          <DisplayPosts />
        ) : (
          <DisplayForm setSelectedTab={setSelectedTab} />
        )}
        <Footer />
    </>
  );
}

export default App;
