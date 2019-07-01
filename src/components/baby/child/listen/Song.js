import React, { Component } from 'react';
import '../../css/listensong.css'

class Song extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount() {
        fetch('http://bb.shoujiduoduo.com/baby/bb.php?type=getlist&pagesize=30&listid=5')
        .then(res=>res.json())
        .then(data=>this.setState({list:data.list.splice(1)}))
    }
    render() {
        return (
            <div className="listensong">
               {
                   this.state.list.map((item,index)=>{
                       return (
                           <div key={item.id} className="songlist" onClick={()=>{
                               this.props.history.push('/detail',{name:item.name,url:item.downurl})
                           }}>
                               <div className="idx">{index+1}</div>
                               <div className="right">
                                   <h3>{item.name}</h3>
                                   <div className="btm">
                                       <span>{item.artist}</span>
                                       <span className="bf">播放:{item.playcnt}</span>
                                   </div>
                               </div>
                           </div>
                       )
                   })
               }
            </div>
        );
    }
}

export default Song;

