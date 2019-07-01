import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
let reducer = ((state = {}, action) => {
    console.log(state, action)
    switch (action.type) {
        case "ADD":
            state = action.data;
            return {...state };
        default:
            return {...state };
    }
})
let reducer2 = ((state = {}, action) => {
    switch (action.type) {
        case "ADD_NEWLIST":
            state = action.data;
            return {...state };
        default:
            return {...state };
    }
})

let reducers = combineReducers({ reducer, reducer2 })
let store = createStore(reducers, applyMiddleware(thunk))
export default store