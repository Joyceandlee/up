import React, { Component } from 'react';
import { Input, List, Typography } from 'antd';
import { connect } from 'react-redux'
const { Search } = Input;


class Add extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        //对象

    }
    render() {
        return (
            <div className="box">
                <header>
                    <h3>股票添加</h3>
                </header>
                <footer>
                    <div>
                        <Search
                            placeholder="input search text"
                            onChange={(e) => {
                                let val = e.target.value;
                                if (!val) {
                                    this.setState({
                                        data: []
                                    })
                                    return
                                }
                                let newList = this.props.list.filter(item => {
                                    return item.name.includes(val)
                                })
                                this.setState({
                                    data: newList
                                })
                            }}
                            style={{ width: 300, marginLeft: 30 }}
                        />
                    </div>
                </footer>
                <main style={{ background: "#fff" }}>
                    {
                        this.state.data[0] ? this.state.data.map((item, index) => {
                            return <li key={index} onClick={() => {
                                this.state.data.filter((item1) => {
                                    if (item1.number == item.number) {
                                        item1.add = true
                                    }
                                })
                                this.setState({

                                })
                                console.log(this.state.data, "*********")
                                //     this.setState({
                                //         data:this.state.data.filter((item1)=>{if(item1.number==item.number){
                                //             item1.add=true
                                //         }
                                //             return item1
                                //         })
                                //     })
                                this.props.newList(this.state.data.filter(item => { return item.add == true }))
                            }}>{item.name}-----------{item.add === false ? "添加" : <span style={{ color: "#f00" }}>已添加</span>}</li>
                        }) : null
                        // (this.props.list[0]?this.props.list.map((item,index)=>{
                        //     return <li key={index}>{item.name}</li>
                        // }):null)
                    }
                </main>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    let arr = []
    for (var i = 0; i <= 4; i++) {
        arr.push(state.reducer[i])
    }
    return {
        list: arr
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        newList: (data) => {
            dispatch({ type: "ADD_NEWLIST", data })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Add);
