import {configureStore} from '@reduxjs/toolkit'
import itemsSlice from './itemsSlice'
import fetchSlice  from './fetchSlice'
import bagSlice from './bagSlice'

const store = configureStore({
    reducer: {
        items:itemsSlice,
        fetchSlice: fetchSlice,
        bagSlice:bagSlice,
    }
})

export default store