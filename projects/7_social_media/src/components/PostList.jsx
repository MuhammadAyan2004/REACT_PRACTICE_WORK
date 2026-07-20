import { useContext } from "react";
import Post from "./post";
import { PostList_provider } from "../store/postList_context";

const PostList = () => {
  const {postList} = useContext(PostList_provider);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
