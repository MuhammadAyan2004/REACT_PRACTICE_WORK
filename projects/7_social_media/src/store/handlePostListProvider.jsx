import { useEffect, useReducer, useState } from "react";
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
        reactions: 0,
        islike: false,
      },
      ...currPostList,
    ];
  } else if (action.type === "delete_post") {
    updatedList = currPostList.filter(
      (card) => card.id !== action.payload.postId,
    );
  } else if (action.type === "new_like") {
    updatedList = currPostList.map((post) => {
      if (post.islike) {
        return post.id === action.payload.postId
          ? { ...post, islike: false, reactions: post.reactions - 1 }
          : post;
      } else if (!post.islike) {
        return post.id === action.payload.postId
          ? { ...post, islike: true, reactions: post.reactions + 1 }
          : post;
      }
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

  const [initialUser, setUser] = useState([]);

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
  const deletePost = (postId) => {
    const deletedPost = {
      type: "delete_post",
      payload: { postId },
    };
    dispatchedPostList(deletedPost);
  };

  const handleLike = (postId, userId) => {
    // console.log(postId);
    dispatchedPostList({
      type: "new_like",
      payload: { postId, userId, initialUser, setUser },
    });
  };

  return (
    <PostList_provider.Provider
      value={{ postList, addPost, deletePost, handleLike }}
    >
      {children}
    </PostList_provider.Provider>
  );
};

export default HandlePosts;
