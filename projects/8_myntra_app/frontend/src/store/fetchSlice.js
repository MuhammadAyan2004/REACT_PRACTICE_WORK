import { createSlice } from '@reduxjs/toolkit'

const fetchSlice = createSlice({
    name: 'items',
    initialState: {
        fetchDone:false,
        currentlyFetching: false
    },
    reducers: {
        markfetchDone: (state) => {
            state.fetchDone = true
        },
        markfetchingStarted: (state) => {
            state.currentlyFetching = true
        },
        markfetchingFinished: (state) => {
            state.currentlyFetching = false
        }
    }
})
export const fetchSliceAction = fetchSlice.actions
export default fetchSlice.reducer