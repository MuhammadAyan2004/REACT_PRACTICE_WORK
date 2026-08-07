import { createSlice } from "@reduxjs/toolkit";

const fetchingSlice = createSlice({
    name:"loader",
    initialState:false,
    reducers:{
        startLoading : () => true,
        stopLoading : () => false
    }
})

export const fetchingAction = fetchingSlice.actions
export default fetchingSlice