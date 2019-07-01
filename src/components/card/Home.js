import React, { Component } from 'react'
import HomePage from './views/HomePage'
import Sum from './views/Sum'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/homePage" component={HomePage}/>
                    <Route path="/sum" component={Sum}/>
                    <Redirect from='/' to='/homepage' />
                </Switch>
            </BrowserRouter>
        )
    }
}
