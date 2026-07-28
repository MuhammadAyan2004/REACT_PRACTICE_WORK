const redux = require('redux')

const initial_value = {
    counter: 0,
}

const reducer = (store = initial_value, action)=>{
    let newStore = store
    if(action.type === 'Increment'){
        newStore = {counter: store.counter + 1}
    } else if (action.type === 'Decrement'){
        newStore = {counter: store.counter - 1}
    } else if (action.type === 'Addition') {
        newStore = { counter: store.counter + action.payload.number }
    }
    return newStore
}

const store = redux.createStore(reducer)

const subscriber = ()=>{
    const state = store.getState()
    console.log(state)
}

store.subscribe(subscriber)

store.dispatch({type: 'Increment'})
store.dispatch({type: 'Decrement'})
store.dispatch({type: 'Increment'})
store.dispatch({type: 'Addition', payload: {number:7}})
store.dispatch({type: 'Decrement'})