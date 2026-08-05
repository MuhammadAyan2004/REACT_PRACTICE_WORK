import DisplayForm from "./components/displayForm";
import DisplayPosts from "./components/displayPosts";
import Footer from "./components/footer";
import Header from "./components/header";
import { useState } from "react";
import HandleProvider from "./store/handleProvider";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <HandleProvider>
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
      </HandleProvider>
    </>
  );
}

export default App;
