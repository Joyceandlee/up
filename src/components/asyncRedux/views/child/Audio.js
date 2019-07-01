import React, { Component } from 'react';
import List from '../List'
import {connect} from 'react-redux'

class Audio extends Component {
    render() {
        return (
            <div className="list">
                {
                    this.props.list&&this.props.list.map((item,index)=>{
                        //audio类型为2
                        item.type=2;
                        return <List key={index} {...item}/>
                    })
                }
            </div>
        );
    }
}
let mapStateToProps=(state)=>{
    return{
        list:state.listreducer.urls
    }
}
export default connect(mapStateToProps)(Audio);
