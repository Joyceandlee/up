import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import MainDetail from './MainDetail'

class Main extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.props.history.push('/main/mainDetail')
                }}>main跳转</button>
                 <Switch>
                    <Route path="/main/mainDetail" component={MainDetail}></Route>
                </Switch>
            </div>
        );
    }
}

export default Main;
