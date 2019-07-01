import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let listreducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_MSG":
            state = action.data;
            return state;
        default:
            return {...state };
    }
}
let videoreducer = (state = '', action) => {
    switch (action.type) {
        case "GET_VIDEO":
            state = action.video;
            return state;
        default:
            return state;
    }
}
let detailreducer = (state = '', action) => {
    switch (action.type) {
        case "DETAIL":
            state = action.data;
            return state;
        default:
            return state;
    }
}
let reducers = combineReducers({ listreducer, videoreducer, detailreducer })

let store = createStore(reducers, applyMiddleware(thunk))

export default store