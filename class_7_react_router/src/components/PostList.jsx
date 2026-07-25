import { useContext } from "react";
import Post from "./post";
import { PostList_provider } from "../store/postList_context";
import WelcomMessage from "./WelcomMessage";
import Loader from "./loader";

const PostList = () => {
  const { postList, loading } = useContext(PostList_provider);

    return (
      <>
        {loading && <Loader />}
        {!loading && postList.length === 0 && <WelcomMessage />}
        {!loading &&
          postList.map((post) => <Post key={post.id} post={post}></Post>)}
      </>
    );
};

export default PostList;
