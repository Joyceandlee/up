import React, { Component } from 'react';
import Instercept from'../intercept'
import Main from './Main';

class MainDetail extends Component {
    render() {
        return (
            <div>
                 <h3>MainDetail</h3>
            </div>
        );
    }
}

MainDetail=Instercept(MainDetail)
export default MainDetail;
