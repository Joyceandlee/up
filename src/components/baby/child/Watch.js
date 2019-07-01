import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import RouterView from '../RouterView'
import '../css/watch.css'
import Footer from './Footer'
class Watch extends Component {
    render() {
        return (

            <div>
                <div className="nav">
                    <NavLink to="/watch/song" activeClassName="active">儿歌</NavLink>
                    <NavLink to="/watch/story" activeClassName="active">故事</NavLink>
                    <NavLink to="/watch/cartoon" activeClassName="active">动画片</NavLink>
                </div>

                <RouterView routes={this.props.children}></RouterView>
                <div className="footer">
                    <Footer></Footer>
                </div>
            </div>


        );
    }
}

export default Watch;
