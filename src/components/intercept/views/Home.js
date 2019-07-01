import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomeDetail from './HomeDetail'
import CreateModal from '../Cover'

function Wrap(props){
    return(
        <div>
            <h3>确认删除吗</h3>
            <button onClick={()=>{
                props.close()
            }}>确认</button><button onClick={()=>{
                props.close()
            }}>取消</button>
        </div>
    )
}

Wrap=CreateModal(Wrap)

class Home extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.show()
                }}>弹框</button>
                <Wrap getMethod={(close,show)=>{
                    this.close=close;
                    this.show=show
                }}/>
                <button onClick={() => {
                    this.props.history.replace('/home/homeDetail')
                }}>home跳转</button>
                <Switch>
                    <Route path="/home/homeDetail" component={HomeDetail}></Route>
                </Switch>
            </div>

        );
    }
}

export default Home;
