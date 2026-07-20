import { useReducer } from "react";
import { PostList_provider } from "./postList_context";

const postListReducer = (currPostList, action) => {
    let updatedList;
    if (action.type === "delete_post"){
        updatedList = currPostList.filter(card => card.id !== action.payload.postId)
    }
    return updatedList;
};

const HandlePosts = ({ children }) => {
  const [postList, dispatchedPostList] = useReducer(
    postListReducer,
    default_Values,
  );
  const addPost = (postTitle, postDescription, postHashtag) => {
    console.log(`${postTitle}, ${postDescription}, ${postHashtag}`);
  };
  const deletePost = (postId) => {
    const deletedPost = {
        type:"delete_post",
        payload :{postId}
    }
    dispatchedPostList(deletedPost)
  };

  return (
    <PostList_provider.Provider value={{postList, addPost, deletePost}}>
      {children}
    </PostList_provider.Provider>
  );
};

const default_Values = [
  {
    id: 1,
    title: "feeling happy today",
    body: "I am learning react dev and making improvement day by day. eventually i'm very excited to share this great news with all firends and family members",
    tags: ["#happy", "#learningReact", "#goodDay"],
    reactions: 5,
    userId: "user123",
  },
  {
    id: 2,
    title: "Imran khan become the prime minister of Pakistan. In Sh Allah",
    body: "The genz of Pakistan are forcing to the goverment and laws to realeased Imran khan and doing election again.",
    tags: ["#genz", "#freeImran khan", "#revolution"],
    reactions: 9,
    userId: "user928",
  },
];

export default HandlePosts;
