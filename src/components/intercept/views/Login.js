import React, { Component } from 'react';

class Login extends Component {
    state={
        name:'',
        pas:''
    }
    render() {
        return (
            <div>
                <h2>Login</h2>
                <input type="text"placeholder="用户名" value={this.state.name} onChange={(e)=>{
                    this.setState({
                        name:e.target.value
                    })
                }}/><br/>
                <input type="password" placeholder="密码"  value={this.state.pas} onChange={(e)=>{
                    this.setState({
                        pas:e.target.value
                    })
                }}/><br/>
                <input type="button" value="登陆" onClick={()=>{
                    //md5加密理论上是一种不可逆的加密算法
                    let md5=(this.state.name+this.state.pas).MD5()
                    localStorage.setItem('token',md5)
                    console.log(md5)
                    this.props.history.goBack()
                }}/>
            </div>
        );
    }
}

export default Login;
