import { createStore, combineReducers } from 'redux'

import listReducer from '../reducer/listReducer'

import totalReducer from '../reducer/totalReducer'

let reducer = combineReducers({ listReducer, totalReducer })

export default createStore(reducer)