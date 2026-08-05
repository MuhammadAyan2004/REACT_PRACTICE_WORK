import { useContext, useRef } from "react";
import { PostProvider } from "../store/contextProvider";

function DisplayForm({setSelectedTab}) {
  const {handleAddPost} = useContext(PostProvider)
  let userIdInput = useRef()
  let titleInput = useRef();
  let bodyInput = useRef();
  let tagsInput = useRef();

  function submitPost (e) {
    e.preventDefault()
    let userElem = userIdInput.current.value
    let titleElem = titleInput.current.value
    let bodyElem = bodyInput.current.value 
    let tagsElem = tagsInput.current.value.split(" ")
    if (
      userElem === "" ||
      titleElem === "" ||
      bodyElem === "" ||
      tagsElem.length <= 1
    ) {
      alert("please fill all the fields");
      return;
    }
    let postId = crypto.randomUUID() 
    handleAddPost(userElem, titleElem, bodyElem, tagsElem, postId)
    setSelectedTab("Home")

    userIdInput.current.value = "";
    titleInput.current.value = "";
    bodyInput.current.value = "";
    tagsInput.current.value = "";
  }

  return (
    <div className="flex justify-center py-10 bg-gray-100">
      <form className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Post
        </h2>
        <div>
          <input
            type="text"
            ref={userIdInput}
            placeholder="Enter your User ID"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>
        <div>
          <input
            type="text"
            ref={titleInput}
            placeholder="Enter your post title"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>
        <div>
          <input
            type="text"
            ref={bodyInput}
            placeholder="Enter your Description"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>
        <div>
          <input
            type="text"
            ref={tagsInput}
            placeholder="Enter your post Tags"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          onClick={(e)=>submitPost(e)}
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}

export default DisplayForm;
