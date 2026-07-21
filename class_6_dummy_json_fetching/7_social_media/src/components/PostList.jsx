import { useContext } from "react";
import Post from "./post";
import { PostList_provider } from "../store/postList_context";
import WelcomMessage from "./WelcomMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostList_provider);

  const showPosts = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        console.log(obj.posts);
        addInitialPosts(obj.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && <WelcomMessage showPosts={showPosts} />}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
