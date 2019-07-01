import React, { Component } from 'react';
import store from './store/index'

class ChildSend extends Component {
    state={
        reducer:{}
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                reducer:store.getState()
            })
        })
    }
    render() {
        let {reducer}=this.state

        return (
            <div style={{width:"300px",height:"200px",border:"3px solid #cfc"}}>
                <button onClick={()=>{
                    //发送数据 store.dispatch({type,data})
                    store.dispatch({type:"UP",data:{name:"Kitty",age:18}})
                }}>发送</button>
                 {reducer.sendReducer&&<h3>{reducer.sendReducer.msg}{reducer.sendReducer.date}</h3>}
            </div>
        );
    }
}

export default ChildSend;
