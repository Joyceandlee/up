import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import RouterView from '../RouterView'
import Footer from './Footer'
import '../css/listen.css'

class Listen extends Component {
    
    render() {
        return (

            <div>
                <div className="tab">
                    <div>
                    <NavLink to='/listen/song' activeClassName="active">儿歌</NavLink>
                    <NavLink to='/listen/story' activeClassName="active">故事</NavLink>
                    </div>
                </div>
                <RouterView routes={this.props.children}></RouterView>
                <div className="footer">
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default Listen;
