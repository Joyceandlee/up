import React, { Component } from 'react';
import './css/list.css'
import Content from './Content'
import Btn from './Btn'


class List extends Component{
    constructor(props){
        super(props)
        this.state={
            content:[]
        }
    }
    render(){
        return(
            <div>
                {
                    this.props.list.map((item,index)=>{
                        return(
                            <div key={item.id} className="box">
                                <h3>{item.msg}</h3>
                                <img src={item.img} alt=""/>
                                <i>{item.price}</i>
                                <Btn id={item.id}/>
                                <Content content={item.content}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
   
}

export default List