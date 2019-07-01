import React, { Component } from 'react';
import ChildSend from './ChildSend'
import ChildReceive from './ChildReceive'

class Father extends Component {
    render() {
        return (
            <div>
                {/* 子组件 */}
                <ChildSend/>
                <ChildReceive/>
            </div>
        );
    }
}

export default Father;
