import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./components/createPost.jsx";
import PostList from "./components/PostList.jsx";
import { postLoader } from "./components/postloader.jsx";
import LoadingFallback from "./components/LoadingFallback.jsx";
import { createPostAction } from "./components/createPostAction.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    HydrateFallback: LoadingFallback,
    children: [
      { path: "/", Component: PostList, loader: postLoader },
      { path: "/createPost", Component: CreatePost, action:createPostAction },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
