import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../css/footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <NavLink to="/watch" activeClassName="active">宝宝看</NavLink>
                <NavLink to="/listen" activeClassName="active">宝宝听</NavLink>
                <NavLink to="/my" activeClassName="active">我的</NavLink>
            </div>
        );
    }
}

export default Footer;
