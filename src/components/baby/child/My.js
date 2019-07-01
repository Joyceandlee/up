import React, { Component } from 'react';
import Footer from './Footer'

class My extends Component {
    componentWillMount(){
        if(!localStorage.getItem('token')){
            this.props.history.replace("/login")
        }
    }
    render() {
        console.log(localStorage.getItem('token'))
        return (
            <div>
                <h2>已登录</h2>
                <div className="footer">
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default My;
