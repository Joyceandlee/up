import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import '../../css/footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <NavLink to="/add" activeClassName="active">添加账单</NavLink>
                <NavLink to="/look" activeClassName="active">查看账单</NavLink>
            </div>
        );
    }
}

export default Footer;
