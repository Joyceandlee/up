import React, { Component } from 'react';
import '../css/menu.css'
import {Link} from 'react-router-dom'
import watcher from '../watcher/watcher'

class Menu extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[{
                id:1,
                img:'./img.png',
                name:"老北京炸酱面",
                msg:"苏格兰打卤面 大杯可乐",
                price:20
            },{
                id:2,
                img:'./img.png',
                name:"宫保鸡丁",
                msg:"宫爆鸡丁一份 两碗米饭 蛋花汤",
                price:25
            },{
                id:3,
                img:'./img.png',
                name:"剁椒鱼头套餐",
                msg:"剁椒鱼头 白菜豆腐汤 四碗面条 可口凉菜",
                price:36
            },{
                id:4,
                img:'./img.png',
                name:"老北京烤鸭套餐",
                msg:"北京烤鸭 四碗米饭 大杯可乐四桶",
                price:45 
            }]
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.list.map((item,index)=>{
                        return(
                            <div className="list" key={item.id}>
                                <img src={item.img} alt=""/>
                                <div className="right">
                                    <div className="top">
                                        <span className="name">{item.name}</span>
                                        <a onClick={()=>{
                                            this.props.history.push('/shopcar',item)
                                        }}>来一份</a>
                                    </div>
                                    <div className="center">{item.msg}</div>
                                    <b>￥{item.price}元</b>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
   
}

export default Menu;
