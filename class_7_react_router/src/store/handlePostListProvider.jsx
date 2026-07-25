import { useCallback, useEffect, useReducer, useState } from "react";
import { PostList_provider } from "./postList_context";

const postListReducer = (currPostList, action) => {
  let updatedList;
  if (action.type === "Add_post") {
    updatedList = [action.payload, ...currPostList];
  } else if (action.type === "delete_post") {
    updatedList = currPostList.filter(
      (card) => card.id !== action.payload.postId,
    );
  } else if (action.type === "new_Initial_Posts") {
    updatedList = action.payload.posts.map((post) => {
      return { ...post, islike: false };
    });
  } else if (action.type === "new_like") {
    updatedList = currPostList.map((post) => {
      if (post.id !== action.payload.postId) {
        return post;
      }
      const isLiked = !post.islike;
      return {
        ...post,
        islike: isLiked,
        reactions: {
          ...post.reactions,
          likes: post.reactions.likes + (isLiked ? 1 : -1),
        },
      };
    });
  }
  return updatedList;
};

const HandlePosts = ({ children }) => {
  const fetchData = () => {
    const data = localStorage.getItem("postList_data");
    return data ? JSON.parse(data) : [];
  };
  const [postList, dispatchedPostList] = useReducer(
    postListReducer,
    [],
    fetchData,
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("postList_data", JSON.stringify(postList));
  }, [postList]);

  const addPost = (post) => {
    console.log("4");
    dispatchedPostList({
      type: "Add_post",
      payload: post,
    });
  };

  // through usecallback
  const deletePost = useCallback((postId) => {
    const deletedPost = {
      type: "delete_post",
      payload: { postId },
    };
    dispatchedPostList(deletedPost);
  }, []);

  const handleLike = useCallback((postId) => {
    dispatchedPostList({
      type: "new_like",
      payload: { postId },
    });
  }, []);

  const addInitialPosts = useCallback((posts) => {
    dispatchedPostList({
      type: "new_Initial_Posts",
      payload: { posts },
    });
  }, []);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://dummyjson.com/posts', { signal })
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
    <PostList_provider.Provider
      value={{ postList, addPost, deletePost, handleLike, loading , setLoading }}
    >
      {children}
    </PostList_provider.Provider>
  );
};

export default HandlePosts;
