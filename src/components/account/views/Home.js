import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { routes } from '../router/routesConfig'
import RouterView from '../RouterView'
import '../css/home.css'
class Home extends Component {
    render() {
        return (
            <div id="app">
                <Router>

                    <RouterView routes={routes} />

                </Router>
            </div>
        );
    }
}

export default Home;
