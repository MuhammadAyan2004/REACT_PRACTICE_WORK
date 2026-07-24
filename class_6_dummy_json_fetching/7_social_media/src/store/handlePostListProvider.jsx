import { useCallback, useEffect, useReducer } from "react";
import { PostList_provider } from "./postList_context";

const postListReducer = (currPostList, action) => {
  let updatedList;
  if (action.type === "Add_post") {
    updatedList = [
      {
        id: action.payload.postId,
        userId: action.payload.postUserId,
        title: action.payload.postTitle,
        body: action.payload.postDescription,
        tags: action.payload.postHashtag,
        reactions: {
          dislikes: 0,
          likes: 0,
        },
        islike: false,
      },
      ...currPostList,
    ];
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
      const isLiked = !post.islike
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

  useEffect(() => {
    localStorage.setItem("postList_data", JSON.stringify(postList));
  }, [postList]);

  const addPost = (
    postId,
    postUserId,
    postTitle,
    postDescription,
    postHashtag,
  ) => {
    dispatchedPostList({
      type: "Add_post",
      payload: {
        postId,
        postUserId,
        postTitle,
        postDescription,
        postHashtag,
      },
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
  },[]);

  const addInitialPosts = useCallback((posts) => {
    dispatchedPostList({
      type: "new_Initial_Posts",
      payload: { posts },
    });
  }, []);

  return (
    <PostList_provider.Provider
      value={{ postList, addPost, deletePost, handleLike, addInitialPosts }}
    >
      {children}
    </PostList_provider.Provider>
  );
};

export default HandlePosts;
