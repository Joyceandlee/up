let totalReducer = ((state = [], action) => {
    switch (action.type) {
        case 'TOTAL':
            state = action.total;
            return state;
        default:
            return state
    }
})

export default totalReducer