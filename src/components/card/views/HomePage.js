import React, { Component, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import '../css/home.css'

import { connect } from 'react-redux'
let List = React.lazy(() => import('./List'))
class Home extends Component {
    state = {
        colorArr: ["#ccf", "#cfc", "pink", "lightblue", "lightcoral", "brown", "#fcc"],
        cost: 0,
        count: 0, 
        costArr: [],
         countArr: [],
        color:""
    }

    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <header>
                        <div className="header">
                            {
                                this.state.colorArr.map((item, index) => {
                                    // 渲染颜色不同的盒子
                                    return <div className="color-box" style={{ backgroundColor: item }} key={index} onClick={()=>{
                                        //点击时将颜色值放到状态里
                                        this.setState({
                                           color:item
                                       })
                                    }}></div>
                                })
                            }
                        </div>
                    </header>
                    <main>
                        {/* 页面未出现之前显示loading。。。 */}
                        <Suspense fallback={<div>Loading...</div>}>
                            <List />
                        </Suspense>
                    </main>
                    <footer>
                        <div className="footer">
                            <h3>总数：{this.props.count}</h3>
                            <h3>总价：{this.props.cost}</h3>
                            <button onClick={()=>{
                                //点击跳转到总计页面 并传送数据color
                                this.props.history.push('/sum',{color:this.state.color})
                            }}>购买</button>
                        </div>
                    </footer>
                </div>
            </BrowserRouter>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        cost:state.reducer.cost,//总价
        count:state.reducer.count//总数
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        saveColor:(color)=>{
            //储存颜色
            dispatch({type:"ADD_COLOR",color})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
