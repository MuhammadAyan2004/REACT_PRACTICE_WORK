import { useEffect } from "react";
import DisplayPost from "./displayPost";
import Loader from "./loader";
import { useSelector } from "react-redux";

function DisplayPosts() {
  const fetching = useSelector((store) => store.fetching)
  const PostList  = useSelector((store) => store.post);

  useEffect(()=>{
    localStorage.setItem("post",JSON.stringify(PostList))
  },[PostList])
  
  return (
    <>
      <div className="w-full min-h-screen bg-black flex flex-col justify-center items-center gap-2 p-6 ">
        {fetching && <Loader />}
        {PostList.map((post, index) => (
          <DisplayPost key={index} post={post} />
        ))}
      </div>
    </>
  );
}

export default DisplayPosts;
