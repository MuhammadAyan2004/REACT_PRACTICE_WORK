import { useContext, useEffect } from "react";
import Post from "./post";
import { PostList_provider } from "../store/postList_context";
import WelcomMessage from "./WelcomMessage";
import Loader from "./loader";

const PostList = ({ loading, setLoading }) => {
  const { postList, addInitialPosts } = useContext(PostList_provider);

  // const showPosts = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((obj) => {
  //       addInitialPosts(obj.posts);
  //     });
  // };

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        addInitialPosts(obj.posts);
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, [addInitialPosts]);

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
