import { useReducer } from "react";
import { PostProvider } from "./contextProvider";

function postReducer(currState, action) {
  let newState;
  if (action.type === "Add_post") {
    newState = [
      ...currState,
      {
        id: action.payload.postId,
        userId: action.payload.userId,
        title: action.payload.title,
        body: action.payload.body,
        tags: action.payload.tags,
        views: 300,
        reactions: {
          likes: 0,
          dislikes: 25,
        },
        isLike: false,
      },
    ];
  } else if (action.type === "likes") {
    newState = currState.map((post) => {
      return post.id === action.payload.postId
        ? {
            ...post,
            reactions: {
              ...post.reactions,
              likes: post.reactions.likes + (post.isLike ? -1 : 1),
            },
            isLike: !post.isLike,
          }
        : post;
    });
  } else if (action.type === "delete_Post"){
    newState = currState.filter((post) => post.id !== action.payload.postId);
  } 

  return newState;
}
function HandleProvider({ children }) {
  
  const [postList, dispatchPost] = useReducer(postReducer, [], () => {
    let data = localStorage.getItem("posts");
    return data ? JSON.parse(data) : [];
  });

  localStorage.setItem("posts", JSON.stringify(postList));

  function handleAddPost(userId, title, body, tags, postId) {
    dispatchPost({
      type: "Add_post",
      payload: {
        postId,
        userId,
        title,
        body,
        tags,
      },
    });
  }
  function handleLike(postId) {
    dispatchPost({
      type: "likes",
      payload: { postId },
    });
  }

  function handleDelete (postId) {
    console.log(postId)
    dispatchPost({
      type:"delete_Post",
      payload:{postId}
    })
  }

  return (
    <PostProvider.Provider value={{ postList, handleAddPost, handleLike, handleDelete }}>
      {children}
    </PostProvider.Provider>
  );
}

export default HandleProvider;
