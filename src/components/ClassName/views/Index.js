import React, { Component } from 'react';
import { connect } from 'react-redux'
let newlist = []
class Index extends Component {

    render() {
        let { name, id } = this.props.location.state
        //显示刚添加的班级 以及该班学生
        let list = this.props.list.filter((item, index) => {
            return item.id == id
        })
      

        return (
            <div>
                <h3>Index</h3>
                <h3>班级：{name}</h3>
                {
                    list.length && list[0].studentList.map((item, index) => {
                        newlist = list[0]
                        return <li key={index}>{item.student}</li>
                    })
                }

                <div style={{ width: "100px", height: "50px", background: "skyblue", lineHeight: "50px", textAlign: "center", borderRadius: "5px",marginTop:"15px" }} onClick={() => {
                    this.props.history.push('/add', id)
                }}>点击添加学生</div>

                <div style={{ width: "100px", height: "50px", background: "skyblue", lineHeight: "50px", textAlign: "center", borderRadius: "5px",marginTop:"15px" }} onClick={() => {
                    this.props.history.push('/create')
                }}>点击添加班级</div>

                <div style={{ width: "100px", height: "50px", background: "skyblue", lineHeight: "50px", textAlign: "center", borderRadius: "5px" ,marginTop:"15px"}} onClick={() => {
                    this.props.history.push('/del')
                }}>班级管理</div>
            </div>
        );
    }
}
let initMapStateToProps = (state) => {
    return {
        list: state.classreducer
    }
}

export default connect(initMapStateToProps)(Index);
