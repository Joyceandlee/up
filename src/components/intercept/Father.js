import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink ,Redirect} from 'react-router-dom'
import Home from './views/Home'
import Main from './views/Main'
import My from './views/My'
import Login from './views/Login'

class Father extends Component {
    render() {
        return (
            <Router>
                <NavLink to="/home">home</NavLink><br/>
                <NavLink to="/main">main</NavLink><br/>
                <NavLink to="/my">my</NavLink><br/>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/main" component={Main}></Route>
                    <Route path="/my" component={My}></Route>
                   <Route path="/login" component={Login}></Route>
                    <Redirect from="/" to="/home"></Redirect>
                </Switch>
                
            </Router>


        );
    }
}

export default Father;
