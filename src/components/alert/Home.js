import React, { Component } from 'react';
import Dialog from './Dialog'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state={
            flag:0
        }
    }

    render(){
        return(
            <div>
                <button
                onClick={()=>{
                    this.setState({
                        flag:3
                    })
                }}>弹框</button>
                {this.state.flag!==0&&<Dialog flag={this.state.flag} click={this.click.bind(this)}/>}
            </div>
        )
    }

    click(){
        this.setState({
            flag:0
        })
    }
}

export default Home