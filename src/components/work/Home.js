import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route,NavLink,Switch,Redirect} from 'react-router-dom'
import {routes} from './routes/routeconfig'
import './css/home.css'

class Home extends Component {
    render() {
        return (
            <Router>
                <div id="app">
                    <header><h3>外卖</h3></header>
                    <main>
                    <Switch>
                        {
                            routes.map((item,index)=>{
                                return <Route key={index} path={item.path} component={item.component}></Route>
                            })
                        }
                    <Redirect from="/" to='/menu'></Redirect>
                    </Switch>
                    </main>
                    <footer>
                        <Link to="/menu">菜单</Link>
                        <Link to="/shopcar">购物车</Link>
                        <Link to="/order">订单</Link>
                        <Link to="/my">我的</Link>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default Home;
