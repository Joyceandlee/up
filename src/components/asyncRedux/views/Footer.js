import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <NavLink to="/msg" activeClassName="active" >介绍</NavLink>
                <NavLink to="/video" activeClassName="active" >视频 </NavLink>
                <NavLink to="/audio" activeClassName="active" >音频</NavLink>
            </div>
        );
    }
}

export default Footer;
