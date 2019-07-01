import React, { Component } from 'react';
import hocComponent from './hocComponent.js'
// import connect from './connect'

class New extends Component {
    
    render() {
        console.log(this.props)
        // console.log(this.props.color,"new=>color")  //接收不到 undefined
        return (
            <div>
                组件
            </div>
        );
    }
}
New=hocComponent(New,'red')
// New=connect("pink")(New)
export default New;
