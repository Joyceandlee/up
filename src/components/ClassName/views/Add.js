import React, { Component } from 'react';
import { connect } from 'react-redux'
let studentId = 0
class Add extends Component {
    state = {
        student: ''
    }
    render() {
        let id = this.props.location.state
        let list = []//显示该班学生
        list = this.props.classlist.filter((item, index) => {
            return item.id == id
        })
        list = list[0].studentList
        return (
            <div>
                <h3>Add</h3>
                <input type="text" placeholder="请输入学生姓名" value={this.state.student} onChange={(e) => {
                    this.setState({
                        student: e.target.value
                    })
                }} />
                <button onClick={() => {
                    studentId++
                    this.props.saveStudent({ student: this.state.student, id: studentId, classId: id })
                }}>添加学生</button>
                <div>
                    {
                        list.length != 0 && list.map((item, index) => {
                            return <li key={item.id}>{item.student}-------------<button onClick={() => {
                                this.props.history.push('/edit', item)
                            }}>编辑</button></li>
                        })
                    }
                </div>
            </div>
        );
    }
}
let initMapStateToProps = (state) => {
    return {
        classlist: state.classreducer
    }
}
let initMapDispatchToProps = (dispatch) => {
    return {
        //存储学生
        saveStudent: (data) => {
            dispatch({ type: "SAVE_STUDENTS", data })
        }
    }
}
export default connect(initMapStateToProps, initMapDispatchToProps)(Add);
