import { useContext } from "react";
import { PostProvider } from "../store/contextProvider";
import DisplayPost from "./displayPost";

function DisplayPosts() {
  const {postList} = useContext(PostProvider)
  return (
    <>
      <div className="w-full min-h-screen bg-black flex flex-col justify-center items-center gap-2 p-6 ">
        {postList.map((post, index) => <DisplayPost key={index} post={post}/>)}
      </div>
    </>
  );
}

export default DisplayPosts;
