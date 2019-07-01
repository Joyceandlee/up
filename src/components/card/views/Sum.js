import React, { Component } from 'react'
import {connect} from 'react-redux'
 class Sum extends Component {
    
    render() {
        console.log(this.props.newList)
        console.log(this.props.location.state.color)//获取跳路由时传来的color
        return (
            <div>
               {
                   this.props.newList.length!==0&&this.props.newList.map((item,index)=>{
                       if(item.count!==0){
                           //展示数据列表
                           return <div className="show" style={{background:this.props.location.state.color}} key={item.id}>{item.name}-----{item.count}（份）-------{item.price}（元）</div>
                       }
                   })
               }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
       newList:state.reducer3
    }
}

export default connect(mapStateToProps)(Sum);
