import React, { Component,Suspense } from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'

let Create=React.lazy(()=>import('./views/Create'))
let Index=React.lazy(()=>import('./views/Index.js'))
let Add=React.lazy(()=>import('./views/Add'))
let Edit=React.lazy(()=>import('./views/Edit'))
let Del=React.lazy(()=>import('./views/Del.js'))

class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route path="/create" component={Create} />
                        <Route path="/index" component={Index} />
                        <Route path="/add" component={Add} />
                        <Route path="/edit" component={Edit} />
                        <Route path="/del" component={Del} />
                        <Redirect from='/' to="/create" />
                    </Suspense>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Home;
