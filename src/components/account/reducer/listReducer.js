let listReducer = ((state = [], action) => {
    console.log(132)
    console.log(state, action)
    switch (action.type) {
        case 'ADD_NOTES':
            state.push(action.obj);
            return [...state];
        default:
            return [...state];
    }
})
export default listReducer