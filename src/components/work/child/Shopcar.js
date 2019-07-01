import React, { Component } from 'react';
import '../css/shopcar.css'
import watcher from '../watcher/watcher'

class Shopcar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            current:{
                name:'',
                price:''
            }
        }
    }
    componentWillMount() {
        console.log(this.props.location.state)
                 this.setState({
                current:{
                    name:this.props.location.state.name,
                    price:this.props.location.state.price
                }
            })
    }

    componentWillUnmount() {
       this.setState = (state, callback) => {
          return
        }
    }
    
    render() {
        return (
            <div>
                <h3 className="qd">清单</h3>
                <div className="car-top">
                    <div className="car-list">
                        <span className="car-name">{this.state.current.name||''}</span>
                        <span className="car-price">{this.state.current.price||0}</span>
                        <div>
                            <span className="reduce" onClick={this.click.bind(this, '-')}>-</span>
                            <span className="count">{this.state.count}</span>
                            <span className="add" onClick={this.click.bind(this, '+')}>+</span>
                        </div>
                    </div>
                </div>
                <div className="sum">合计：￥{this.state.current.price*this.state.count}</div>
                <h3 className="lx">联系方式</h3>
                <div className="car-center">
                    <div>
                        <span>姓名</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>电话</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>地址</span>
                        <input type="text" />
                    </div>
                </div>
                <div className="car-bottom">
                    <span>清空购物车</span>
                    <span className="btn" style={{ color: "#fff" }}>下单</span>
                </div>
            </div>
        );
    }

    click(sign) {
        if (sign == '-') {
            if (this.state.count > 1) {
                this.setState({
                    count: --this.state.count
                })
            }
        } else if (sign == '+') {
            if (this.state.count < 10) {
                this.setState({
                    count: ++this.state.count
                })
            }
        }
    }
}

export default Shopcar;
