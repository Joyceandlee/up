import React, { Component } from 'react';
import { connect } from 'react-redux'

let id = 0;
class Create extends Component {
    state = {
        className: ''
    }
    render() {
        return (
            <div>
                <h3>Create</h3>
                <input type="text" placeholder="请输入班级" value={this.state.className} onChange={(e) => {
                    this.setState({
                        className: e.target.value
                    })
                }} />
                <button onClick={this.createFn.bind(this)}>创建班级</button>
            </div>
        );
    }
    //创建班级
    createFn() {
        id++
        //跳转到详情页面
        this.props.history.push('/index', { id, name: this.state.className })
        //如果班级不为空的话 添加到数据库
        this.state.className && this.props.saveClass({ id, name: this.state.className, studentList: [] })
    }
}
let initMapStateToProps = (state) => {
    return {

    }
}
let initMapDispatchToProps = (dispatch) => {
    return {
        //添加班级
        saveClass: (data) => {
            dispatch({ type: "SAVE_CLASS", data })
        }
    }
}
export default connect(initMapStateToProps, initMapDispatchToProps)(Create);
