import React, { Component } from 'react'
import { Badge, Button, Icon, Switch } from 'antd';
import { connect } from 'react-redux'
const ButtonGroup = Button.Group;
class List extends Component {
    state = {
        list: [
            { id: 1, name: "友情卡", price: 800, count: 0, active: false, cost: 0 },
            { id: 2, name: "爱情卡", price: 1000, count: 0, active: false, cost: 0 },
            { id: 3, name: "亲情卡", price: 1200, count: 0, active: false, cost: 0 },
            { id: 4, name: "感谢卡", price: 1000, count: 0, active: false, cost: 0 },
            { id: 5, name: "挚爱卡", price: 900, count: 0, active: false, cost: 0 },
            { id: 6, name: "生日卡", price: 800, count: 0, active: false, cost: 0 },
            { id: 7, name: "好人卡", price: 800, count: 0, active: false, cost: 0 },
            { id: 8, name: "电话卡", price: 500, count: 0, active: false, cost: 0 },
        ],
        show: true,
        costArr: [],//所有价钱的集合
        countArr: []//所有份数的集合
    };
    
    onChange = show => {
        this.setState({ show });
    };

    render() {
        return (
            <div className="content">
                {
                    this.state.list.map((item, index) => {
                        return <div className={item.flag ? "list active" : "list"} key={item.id} onClick={() => {
                            //点击时  每次清空state数据
                            this.setState({
                                costArr: [], countArr: []
                            })
                            for (let i in this.state.list) {
                                //将所有的价钱 数量放进一个数组 进行求和
                                this.state.costArr.push(this.state.list[i].price * this.state.list[i].count)
                                this.state.countArr.push(this.state.list[i].count)
                            }
                            // console.log(this.state.costArr,this.state.countArr)
                            //求和 并且传到store中
                            this.props.saveList({ cost: eval(this.state.costArr.join('+')), count: eval(this.state.countArr.join('+')) })
                           //将要购买的列表  存到store中
                            this.props.savenewList({list:this.state.list})
                            //设置高亮
                            if (item.count > 0) {
                                item.flag = true
                            } else {
                                item.flag = false;
                            }
                        }}>
                            <Badge count={item.count}>
                                <span className="head-example">{item.name}</span>
                            </Badge>
                            <b>{item.price}</b>
                            <ButtonGroup>
                                <Button onClick={() => {
                                    //点击减号
                                    let count = item.count;
                                    count = count - 1;
                                    if (count < 0) {
                                        count = 0;
                                    }
                                    // 修改state中的数据
                                    this.state.list.filter((item1, index1) => {
                                        if (item1.id == item.id) {
                                            //每一项的数量,价格
                                            item1.count = count
                                            item1.cost = count * item1.price
                                        }
                                    })
                                    //并刷新页面
                                    this.setState({});
                                }}>
                                    <Icon type="minus" />
                                </Button>
                                <Button onClick={() => {
                                    //点击加号
                                    let count = item.count;
                                    count = count + 1;
                                    //筛选 并修改数据
                                    this.state.list.filter((item1, index1) => {
                                        if (item1.id == item.id) {
                                            item1.count = count
                                            item1.cost = count * item1.price
                                        }
                                    })

                                    this.setState({});
                                }}>
                                    <Icon type="plus" />
                                </Button>
                            </ButtonGroup>
                        </div>
                    })
                }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        saveList: (data) => {
            // 总价cost 总数count
            dispatch({ type: "ADD_LIST", data })
        },
        savenewList:(data)=>{
            // 经选中后需要购买的list
            dispatch({type:'ADD_NEWLIST',data})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
