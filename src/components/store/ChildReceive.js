import React, { Component } from 'react';
import store from './store/index'

class ChildReceive extends Component {
    state={
        hello:{}
    }
    componentDidMount(){
        //接受数据并操纵state
        store.subscribe(()=>{
            this.setState({
                hello:store.getState()
            })
        })
    }
    render() {
        let {hello}=this.state
        // console.log(this.state.hello.listReducer)
        return (
            <div style={{width:"300px",height:"200px",border:"3px solid #ccf"}}>
                {hello.listReducer&&<div>
                    <h2>{hello.listReducer.name}</h2>
                    <button onClick={()=>{
                        store.dispatch({type:"SEND",data:{msg:"今天的吃饭时间",date:"中午12:00"}})
                    }}>send</button>
                </div>}
            </div>
        );
    }
}

export default ChildReceive;
