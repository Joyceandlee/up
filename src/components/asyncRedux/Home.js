import React, { Component } from 'react';
import { connect } from 'react-redux'
import { request } from './request'
import Footer from './views/Footer'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Msg from './views/child/Msg'
import Video from './views/child/Video'
import Audio from './views/child/Audio'
import './css/home.css'
import Detail from './views/Detail'
class Home extends Component {
    componentDidMount() {
        this.props.getData(request)
    }
    render() {
  
        return (
            <div id="app">
                <Router>
                    <header>
                        <h3>把冷漠变成爱-儿童诗歌舞蹈</h3>
                    </header>
                    <main>
                        <Detail/>
                    </main>
                    <footer>
                        <Footer />
                        <Switch>
                            <Route path="/msg" component={Msg} />
                            <Route path="/video" component={Video} />
                            <Route path="/audio" component={Audio} />
                            <Redirect from='/' to="/msg" />
                        </Switch>
                    </footer>
                </Router>
            </div>
        );
    }
}
let mapStateToProps=(state)=>{
    return{

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getData: (request) => {
            dispatch(request)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
