import { createContext } from "react";

export const PostProvider = createContext({
  postList: [],
  handleAddPost: () => {},
  handleLike: () => {},
  handleDelete: () => {},
});