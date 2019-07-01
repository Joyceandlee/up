import React, { Component } from 'react';
import Footer from './Footer'
class Homepage extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <h3>首页</h3>
                </header>
                <main></main>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default Homepage;
