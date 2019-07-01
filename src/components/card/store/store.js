import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
let reducer = (state = {}, action) => {
    //存储总份数，总价
    switch (action.type) {
        case "ADD_LIST":
            state = action.data;
            return state;
        default:
            return state
    }
}
let reducer1 = (state = {}, action) => {
    //存储背景颜色
    switch (action.type) {
        case "ADD_COLOR":
            state = action.color;
            return state;
        default:
            return state
    }
}
let reducer3 = (state = [], action) => {
    //存储被选中的列表
    switch (action.type) {
        case "ADD_NEWLIST":
            state = action.data.list;
            return [...state];
        default:
            return [...state]
    }
}
let reducers = combineReducers({ reducer, reducer1, reducer3 })

let store = createStore(reducers, applyMiddleware(thunk))

export default store