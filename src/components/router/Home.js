import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import { routes } from './routes/routerconfig'
import RouterView from './child/RouterView'

class Home extends Component {
    render() {
        return (<Router>

            <NavLink to="/main" > 主页 </NavLink>
            <NavLink to="/me" > 我的 </NavLink>
            
            <RouterView routes={routes} > </RouterView>
            
            {
                /* <Switch>
                                    {
                                        routes.map((item,index)=>{
                                            return <Route key={index} path={item.path} component={item.component}></Route>
                                        })
                                    }
                                    </Switch> */
            }

            { /* 重定向 */} { /* <Redirect from='/' to='/main'></Redirect> */}

        </Router>
        );
    }
}

export default Home;

