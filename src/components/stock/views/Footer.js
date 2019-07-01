import React, { Component } from 'react';
import {NavLink } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <NavLink to="/homepage" activeClassName="active">首页</NavLink>
                <NavLink to="/market" activeClassName="active">行情</NavLink>
                <NavLink to="/option" activeClassName="active">自选</NavLink>
                <NavLink to="/deal" activeClassName="active">交易</NavLink>
                <NavLink to="/information" activeClassName="active">资讯</NavLink>
            </div>
        );
    }
}

export default Footer;
