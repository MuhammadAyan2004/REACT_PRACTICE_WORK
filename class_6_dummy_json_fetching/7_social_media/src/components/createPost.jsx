import { useContext, useRef } from "react";
import { PostList_provider } from "../store/postList_context";

const CreatePost = ({ setSelectedTab, setLoading }) => {
  const { addPost } = useContext(PostList_provider);
  let postIdElem = useRef(0);
  let postUserIdElem = useRef("");
  let postTitleElem = useRef("");
  let postDescriptionElem = useRef("");
  let postHashtagElem = useRef("");

  const submitPost = (e) => {
    e.preventDefault();

    if(postUserIdElem.current.value == "" && postTitleElem.current.value == "" && postDescriptionElem.current.value == "" && postHashtagElem.current.value == ""){
      return alert("fill out all the fields.")
    }
    
    let postId = crypto.randomUUID();
    let postUserId = postUserIdElem.current.value;
    let postTitle = postTitleElem.current.value;
    let postDescription = postDescriptionElem.current.value;
    let postHashtag = postHashtagElem.current.value.trim().split(/\s+/);

    // show Loader
    setLoading(true)

    // add Post
    addPost(postId, postUserId, postTitle, postDescription, postHashtag);

    // change Tab
    setSelectedTab("Home")

    // hide loader after 1 sec
    setTimeout(()=>{
      setLoading(false)
    },1000)

    // clear inputs
    postUserIdElem.current.value = ""; 
    postTitleElem.current.value = "";
    postDescriptionElem.current.value = "";
    postHashtagElem.current.value = "";
    
  };
  return (
    <div className="createPostArea">
      <form className="innerBox">
        <strong>
          <center>Creating post</center>
        </strong>
        <input type="text" ref={postIdElem} hidden />
        <div className="mb-3">
          <label htmlFor="user_Id" className="form-label">
            user Id
          </label>
          <input
            type="text"
            className="form-control"
            id="user_Id"
            ref={postUserIdElem}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Post_Title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="Post_Title"
            ref={postTitleElem}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="Description"
            ref={postDescriptionElem}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Add_Hashtags" className="form-label">
            Add Hashtags
          </label>
          <input
            type="text"
            className="form-control"
            id="Add_Hashtags"
            ref={postHashtagElem}
          />
        </div>
        <center>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitPost}
          >
            share post
          </button>
        </center>
      </form>
    </div>
  );
};

export default CreatePost;
