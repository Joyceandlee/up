import React, { Component } from 'react';
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import { Icon } from 'antd'
import {connect} from 'react-redux'
class Option extends Component {
    state={
        showList:[]
    }
    render() {
        let arr=this.props.newList;
        arr=arr.filter(res=>{return res!=undefined})
        return (
            <div className="box">
                <header>
                    <h3>自选</h3>
                </header>
                <main>
                    <img src="./banner.png" alt="" />
                    <div className="content">
                        <div className="edit" onClick={()=>{
                            this.props.history.push('/del')
                        }}>编辑<Icon className="edit-icon" type="form" /></div>

                        <div className="list">
                          {
                              arr.length!=0?
                              <div>
                                    { 
                                       arr.map((item,index)=>{
                                           console.log(item,'item')
                                            return <li className="showList" key={index}>{item.name}</li>
                                        })
                                        // .filter((item,index)=>{
                                        //     console.log(item,"-----------item")
                                        //          return item.add==true
                                        //      })
                                    }
                               </div>:
                               <div className="zero" onClick={()=>{
                                this.props.history.push("/add")
                            }}>
                                <Icon type="plus-square" theme="twoTone" className="add-icon" twoToneColor="#D7423A" />
                                暂无股票 点击添加
                            </div>
                          } 
                        </div>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}
let mapStateToProps=(state)=>{
    console.log(state,"state.reducer2[i]")
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
export default connect(mapStateToProps)(Option);
