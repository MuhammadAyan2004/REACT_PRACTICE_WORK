import { createSlice } from '@reduxjs/toolkit'

const bagSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addToBag: (state, action)=>{

            if (state.includes(action.payload)) return
            state.push(action.payload)

        },
        removeBag: (state, action)=>{

            if (state.includes(action.payload)){
                console.log("true")
                return state.filter(item => item !== action.payload)
            }
            
        },
    }
})
export const bagAction = bagSlice.actions
export default bagSlice.reducer