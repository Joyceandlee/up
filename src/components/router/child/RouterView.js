import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'

class RouterView extends Component {
    render() {
        let {routes}=this.props;

        let route1=routes.filter((item,index)=>item.redirect)
        let route2=routes.filter((item,index)=>!item.redirect)

        return (
            <Switch>
                {
                    route2.map((item,index)=>{
                        return <Route key={index}  path={item.path} render={(props)=>{
                            return  <item.component children={item.children} {...props}/>
                        }}></Route>
                    })
                }
                {
                    route1.map((item,index)=>{
                        return <Redirect key={index} from={item.from} to={item.path}></Redirect>
                    })
                }
            </Switch>
        );
    }
}

export default RouterView;
