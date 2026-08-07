import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";
import fetchingSlice from "./fetchingSlice";

const postStore = configureStore({
    reducer:{
        post : postSlice.reducer,
        fetching: fetchingSlice.reducer
    }
})

export default postStore