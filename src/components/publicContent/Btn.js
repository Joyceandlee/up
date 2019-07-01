import React, { Component } from 'react';
import './css/btn.css'
import watcher from './watcher/watcher'

class Btn extends Component {
    constructor(props) {
        super(props)
        this.state={
            flag:false
        }
    }
    render() {
        return (
            <div className="btn">
                <input type="button" value="点赞" onClick={()=>{
                    watcher.publish('home',this.props.id)
                    // this.props.changePrice(this.props.id)
                }}/>
                <input type="button" value="评论" onClick={this.click.bind(this)} />
                <input type="button" value="转发" onClick={()=>{
                    this.setState={
                        flag:true
                    }
                }}/>
            </div>
        )
    }
    click(){
        let content=window.prompt("请输入评论")
        watcher.publish('home2',{id:this.props.id,content:content})
        // this.props.changeContent(this.props.id,content)

    }
}

export default Btn