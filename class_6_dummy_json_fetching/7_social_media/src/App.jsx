import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import CreatePost from "./components/createPost";
import PostList from "./components/PostList";
import { useState } from "react";
import HandlePosts from "./store/handlePostListProvider";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [loading, setLoading] = useState(false);

  return (
    <HandlePosts>
      <div className="app-container">
        <div className="sidebar-section">
          <Sidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Sidebar>
        </div>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList loading={loading} setLoading={setLoading} />
          ) : (
            <CreatePost
              setSelectedTab={setSelectedTab}
              setLoading={setLoading}
            />
          )}
          <Footer />
        </div>
      </div>
    </HandlePosts>
  );
}

export default App;
