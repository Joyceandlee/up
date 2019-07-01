
let sendReducer=(state=[],action)=>{
    switch(action.type){
          case "SEND":
              state=action.data?action.data:[]
              return state;
            default:
                return state;
    }
}
export default sendReducer;