import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let classreducer = (state = [], action) => {
    switch (action.type) {
        case "SAVE_CLASS":
            state.push(action.data);
            return [...state];
        case "SAVE_STUDENTS":
            state.filter((item, index) => item.id == action.data.classId && item.studentList.push(action.data))
            return [...state];
        case 'SAVE_STUDENTS_TWO':
            state.filter((item, index) => {
                if (item.name == action.data.nameClass) {
                    action.data.classId = item.id
                    item.studentList.push(action.data)
                }
            })
            return [...state];
        default:
            return [...state];
    }
}

let reducers = combineReducers({ classreducer })

let store = createStore(reducers, applyMiddleware(thunk))

export default store