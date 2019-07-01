import React, { Component } from 'react';
import '../../css/cartoon.css'

class Cartoon extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
            cartoon:''
        }
    }
    componentDidMount(){
        fetch('http://bb.shoujiduoduo.com/baby/bb.php?type=getlistv2&act=home&pagesize=30&pid=26')
        .then(res=>res.json())
        .then(data=>this.setState({list:data.list.splice(1)}))

        fetch('http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30')
        .then(res=>res.json())
        .then(data=>this.setState({cartoon:data.list[1].downurl}))
    }
    render() {
        return (
            <div id="cartoon">
               {
                   this.state.list.map((item,index)=>{
                       return(
                           <div key={item.id} className="cartoon" onClick={()=>{
                               this.props.history.push('/detail',{name:item.name,url:this.state.cartoon})
                           }}>
                               <img src={item.pic} alt=""/>
                               <div className="msg">
                                   <h3 className="h3">{index+1}.{item.name}</h3>
                                   <span className="ji">共{item.tracks}集</span>
                               </div>
                               <b>{item.score}分</b>
                           </div>
                       )
                   })
               }
            </div>
        );
    }
}

export default Cartoon;
