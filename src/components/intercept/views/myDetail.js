import React, { Component } from 'react';
import Instercept from '../intercept'

class MyDetail extends Component {
    render() {
        return (
            <div>
                <h3>MyDetail</h3>
            </div>
        );
    }
}
MyDetail=Instercept(MyDetail)
export default MyDetail;
