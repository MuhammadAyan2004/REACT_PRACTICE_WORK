import { useContext } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { PostList_provider } from "../store/postList_context";

const Post = ({ post }) => {
  const {deletePost , handleLike } = useContext(PostList_provider)
  
  const likedFuntion = ()=>{
    handleLike(post.id)
  }
  return (
    <div className="card cards" style={{ width: "18rem" }}>
      <RxCross1 className="postCross" onClick={() => deletePost(post.id)} />
      <span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvMFDtJFJLzEYY5bLQhfUwWBljfDu4l0qhnyOhkya1SOWltYgSZQ11eU&s=10"
          className="imgDetail"
          alt="..."
        />{" "}
        <strong>{post.userId}</strong>
      </span>
      <div className="card-body">
        <h6 className="card-title">{post.title}</h6>
        <p className="card-text bodyText">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-secondary hashtag">
            {tag}
          </span>
        ))}
        <p className="postLikes">
          <AiOutlineLike className="postLikeBtn" onClick={likedFuntion} />{" "}
          {post.reactions.likes > 0 ? post.reactions.likes : "no react yet"}
        </p>
      </div>
    </div>
  );
};

export default Post;
