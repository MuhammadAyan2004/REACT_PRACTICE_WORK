import { createContext} from "react";

export const PostList_provider = createContext({
  postList: [],
  addPost: () => {},
  loading: false,
  setLoading: () => {},
  deletePost: () => {},
  handleLike: () => {},
});


