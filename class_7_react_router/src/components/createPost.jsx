import { useRef } from "react";
import { Form} from "react-router-dom";

const CreatePost = () => {
  let postIdElem = useRef(0);

  return (
    <>
      <div className="createPostArea">
        <Form method="post" className="innerBox">
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
              name="userId"
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
              name="title"
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
              name="body"
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
              name="tags"
            />
          </div>
          <center>
            <button type="submit" className="btn btn-primary">
              share post
            </button>
          </center>
        </Form>
      </div>
    </>
  );
};

export default CreatePost;
