import React, { Component } from 'react';
import Footer from './Footer'
class Information extends Component {
    render() {
        return (
            <div className="box">
                <header>
                <h3>资讯</h3>
                </header>
                <main></main>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default Information;
