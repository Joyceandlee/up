import React, { Component } from 'react';
import List from '../List'
import {connect} from 'react-redux'

class Video extends Component {
    render() {
        return (
            <div className="list">
                {
                    this.props.list&&this.props.list.map((item,index)=>{
                        //video类型为1
                        item.type=1;
                        return <List key={index} {...item}/>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        list:state.listreducer.urls
    }
}

export default connect(mapStateToProps)(Video);
