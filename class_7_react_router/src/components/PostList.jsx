import Post from "./post";
import WelcomMessage from "./WelcomMessage";
import Loader from "./loader";
import { useLoaderData} from "react-router-dom";
import { useContext } from "react";
import { PostList_provider } from "../store/postList_context";

const PostList = () => {
  const { loading, postList } = useContext(PostList_provider);
  const posts = useLoaderData()
    return (
      <>
        {loading && <Loader />}
        {!loading && postList.length === 0 && <WelcomMessage />}
        {!loading && postList.map((post) => <Post key={post.id} post={post}></Post>)}
        {!loading && posts.map((post) => <Post key={post.id} post={post}></Post>)}
      </>
    );
};

export default PostList;
