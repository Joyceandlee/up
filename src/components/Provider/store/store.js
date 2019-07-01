import { createStore, combineReducers } from 'redux'

import listreducer from '../reducer/listreducer'

let reducers = combineReducers({ listreducer })

export default createStore(reducers)