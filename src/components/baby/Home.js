import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Redirect } from 'react-router-dom'
import { routes } from './routes/routesconfig'
import './css/home.css'
import RouterView from './RouterView'

class Home extends Component {
   
    render() {
        return (
            <div id="app">
                <Router>
                <header></header>
                <main>
                    <RouterView routes={routes} />
                </main>
                </Router>
            </div>
        );
    }
}

export default Home;
