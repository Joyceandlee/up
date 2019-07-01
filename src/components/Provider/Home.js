import React, { Component } from 'react';
import {connect} from 'react-redux'

class Home extends Component {
    state={
        name:"Ben"
    }
    render() {
        console.log(this.props.list)
        return (
            <div>
               <button onClick={()=>{
                   this.props.saveList(this.state)
               }}>11111111111111111111</button>
            </div>
        );
    }
}

let mapStateToProps=((state)=>{
    return{
        list:state
    }
})

let mapDispatchToProps=((dispatch)=>{
    return{
        saveList:(msg)=>{
            dispatch({type:"ADD_LIST",data:msg})
        }
    }
})


Home= connect(mapStateToProps, mapDispatchToProps)(Home)

// Home=connect((state)=>{
//     return {
//         list:state
//     }
// },(dispatch)=>{return {}})(Home)

export default Home;
