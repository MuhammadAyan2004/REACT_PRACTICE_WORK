import { FaRegHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { postActions } from "../store/postSlice";

function DisplayPost({ post }) {
  const dispatch = useDispatch()

  const handleDelete = ()=>{
    dispatch(postActions.deletePost(post.id))
  }

  const handleLike = ()=>{
    dispatch(postActions.likePost(post.id))
  }

  return (
    <>
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h5 className="text-2xl font-bold text-gray-800 mb-3">
              {post.userId}
            </h5>
            <button className="text-2xl" onClick={handleDelete}>
              <RxCross2 />
            </button>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">{post.title}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{post.body}</p>
          <ul className="w-full flex gap-1 flex-wrap ">
            {post.tags.map((tag, index) => (
              <li
                key={index}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                {tag}
              </li>
            ))}
          </ul>
          <ul className="w-full mt-2 flex items-center justify-between text-gray-500">
            <li
              className="flex items-center gap-1 cursor-pointer"
              onClick={handleLike}
            >
              <FaRegHeart /> {post.reactions.likes}
            </li>
            <li>views . {post.views}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DisplayPost;
