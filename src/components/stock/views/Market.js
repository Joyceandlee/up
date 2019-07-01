import React, { Component } from 'react';
import Footer from './Footer'
class Market extends Component {
    render() {
        return (
            <div className="box">
                <header>
                <h3>行情</h3>
                </header>
                <main></main>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default Market;
