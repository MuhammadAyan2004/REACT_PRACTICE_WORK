import { createStore } from "redux"
const Initial_Value = {
    counter: 0,
    privacy: false
}
const counterReducer = (store = Initial_Value, action) => {
    if (action.type === "Increment") {
        return { ...store, counter: store.counter + 1 }
    } else if (action.type === "Decrement") {
        return { ...store, counter: store.counter - 1 }
    } else if (action.type === "ADD") {
        return { ...store, counter: store.counter + Number(action.payload.num) }
    } else if (action.type === "SUB") {
        return { ...store, counter: store.counter - Number(action.payload.num) }
    } else if (action.type === "Privacy") {
        return { ...store, privacy: !store.privacy }
    }
    return store
}

const counterStore = createStore(counterReducer)

export default counterStore