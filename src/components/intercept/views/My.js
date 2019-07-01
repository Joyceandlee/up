import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import MyDetail from './myDetail'

class My extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.props.history.push('/my/mydetail')
                }}>my跳转</button>
                <Switch>
                    <Route path="/my/mydetail" component={MyDetail}></Route>
                </Switch>
            </div>
        );
    }
}

export default My;
