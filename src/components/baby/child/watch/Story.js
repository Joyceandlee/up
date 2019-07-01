import React, { Component } from 'react';
import '../../css/story.css'
class Story extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount() {
        fetch('http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=27')
            .then(res => res.json())
            .then(data => this.setState({list:data.list.splice(1)}))
    }
    render() {
        return ( 
            <div className="story">
                {
                    this.state.list.map((item, index) => {
                        return (
                            <div className="list" key={item.id * 1} onClick={()=>{
                                this.props.history.push('/detail',{url:item.downurl,name:item.name})
                            }}>
                                <img src={item.pic} alt="" />
                                <div className="right">
                                    <h3>{index+1}.{item.name}</h3>
                                    <div className="msg">
                                        <span>{item.artist}</span>
                                        <span className="bf">播放:{item.playcnt}</span>
                                    </div>
                                </div>
                                <div className="iconfont icon-xiazai"></div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Story;