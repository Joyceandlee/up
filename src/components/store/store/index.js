import { createStore, combineReducers } from 'redux'
//引入reducer
import listReducer from './reducer/listReducer'
import sendReducer from './reducer/sendReducer'

//合并reducers
let reducers = combineReducers({ listReducer, sendReducer })

//创建仓库
let store = createStore(reducers)

window.store = store

//抛出
export default store