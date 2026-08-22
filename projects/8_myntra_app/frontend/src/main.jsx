import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import {Provider} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css"

import App from "./routes/App.jsx";
import Home from "./routes/home.jsx";
import Bag from "./routes/bag.jsx";
import store from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "/", Component: Home },
      { path: "/bag", Component: Bag },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
