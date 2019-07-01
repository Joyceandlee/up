import React, { Component } from 'react';
import New from './New'

class Father extends Component {
    state={
        color:'green'
    }
    render() {
        return (
            <div>
                五颜六色
                <New color={this.state.color}/>
                <New color={"orange"}/>
                <New color={"blue"}/>
                <New color={"skyblue"}/>
                <New color={"lightgreen"}/>
                <New color={"purple"}/>
                <New color={"grey"}/>
                <New/>
            </div>
        );
    }
}

export default Father;
