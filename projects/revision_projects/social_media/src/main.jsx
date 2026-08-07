import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App.jsx";
import postStore from "./store/postStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={postStore}>
      <App />
    </Provider>
  </StrictMode>,
);
