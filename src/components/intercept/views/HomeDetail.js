import React, { Component } from 'react';
import Instercept from '../intercept'

class HomeDetail extends Component {
    render() {
        return (
            <div>
                <h3>HomeDetail</h3>
            </div>
        );
    }
}
HomeDetail=Instercept(HomeDetail)

export default HomeDetail;
