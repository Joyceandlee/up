import React, { Component } from 'react'
import {Checkbox} from 'antd'
import {connect} from 'react-redux'

 class DEl extends Component {
  
    render() {
        return (
            <div>
                {
                    
                    
                    this.props.newList.map((item,index)=>{
                        if(item.add==true){
                            return <Checkbox key={index} onChange={(e)=>{
                                console.log(e.target.value)
                            }}>{item.name}</Checkbox>
                        }
                    })
                }
                
            </div>
        )
    }
}

let mapStateToProps=(state)=>{
    let arr = []
    //Object.keys   //Object.getOwnPropertyNames  判断对象是否为空
    if(Object.getOwnPropertyNames(state.reducer2).length!=0){
        for (var i = 0; i <= 4; i++) {
            arr.push(state.reducer2[i])
        }
     
    }
    return{
        newList:arr
    }
}
export default connect(mapStateToProps)(DEl)
