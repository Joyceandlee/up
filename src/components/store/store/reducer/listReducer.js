//设置state初始状态
let listReducer = (state = [], action) => {
    // console.log(state, "state")
    // console.log(action, "action")

    //action：接受值 并复制给state
    //state：操作数据
    switch (action.type) {
        case "UP":
            state = action.data ? action.data : []
            return {...state};
        default:
            return {...state};
    }

}
export default listReducer;