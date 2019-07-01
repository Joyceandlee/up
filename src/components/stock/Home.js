import React, { Component } from 'react';
import './mockdata'
import axios from 'axios'
import { BrowserRouter, NavLink, Route, Redirect,Switch } from 'react-router-dom'
import './css/home.css'
import {connect} from 'react-redux'
//router
import Homepage from './views/Homepage'
import Market from './views/Market'
import Option from './views/Option'
import Deal from './views/Deal'
import Information from './views/Information'
import Add from './views/Add'
import Del from './views/Del'
//request
import {requestMock} from './api/request'
class Home extends Component {
    state = {
        news: []
    }
    componentDidMount() {
        this.props.addList(requestMock)
    }
    render() {
        console.log(this.state.news)
        return (
            <div id="app">
                <BrowserRouter>
                    <Switch>
                        <Route path="/homepage" component={Homepage}/>
                        <Route path="/market" component={Market}/>
                        <Route path="/option" component={Option}/>
                        <Route path="/deal" component={Deal}/>
                        <Route path="/information" component={Information}/>
                        <Route path="/add" component={Add}/>
                        <Route path="/del" component={Del}/>>
                        <Redirect from="/" to="/option" />>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
let mapStateToProps=(state)=>{
    return {}
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addList:(fn)=>{
            dispatch(fn)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
