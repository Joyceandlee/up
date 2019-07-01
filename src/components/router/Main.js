import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import { routes } from './routes/routerconfig'
import RouterView from './child/RouterView'

class Main extends Component {
    render() {
        return (
            <div>
                <h1>Main</h1>
                <NavLink to="/main/child">《child》</NavLink>
                
                <button onClick={() => {
                    this.props.history.push("/main/item", { name: "Kitty" })
                }}>《item》</button>
                {/* <NavLink to="/main/item">《item》</NavLink> */}
              
                <RouterView routes={this.props.children}></RouterView>


                {/* <Switch>
                    {
                        routes[0].children.map((item,index)=>{
                            return <Route key={index} path={item.path} component={item.component}/>
                        })
                    }
                    <Redirect to="/main/child"/>
                </Switch>  */}
            </div>
        );
    }
}

export default Main;

// <Switch>
//                     {
//                         routes[1].children.map((item,index)=>{
//                             return <Route key={index} path={item.path} component={item.component}></Route>
//                         })
//                     }
//                     <Redirect to='/main/child'/>
//                 </Switch>

