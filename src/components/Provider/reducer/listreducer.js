let listreducer = ((state = { name: "Kitty", age: 16 }, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            state = action.data;
            return {...state };
        default:
            return {...state }
    }
})

export default listreducer