import { createSlice } from '@reduxjs/toolkit'

const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addInitialPost: (state,action)=>{
            return action.payload[0]
        }
    }
})
export const itemsAction = itemsSlice.actions
export default itemsSlice.reducer