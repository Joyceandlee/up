import React, { Component } from 'react';
import { connect } from 'react-redux'

let name = ''
class Edit extends Component {
    state={
        studentClass:'',
        nameClass:''
    }
    componentDidMount(){
        this.setState({
            studentClass:this.props.location.state.student,
            nameClass:name
        })
    }
    render() {
        console.log(this.props.list)
        console.log(this.props.location.state)
        
        this.props.list.map((item, index) => {
            if (item.id == this.props.location.state.classId) {
                name = item.name
            }
        })

        return (
            <div>
                <h3>edit</h3>
                {
                    <div>
                        <h3>学生姓名：<input type="text" value={this.state.studentClass} onChange={(e)=>{
                            this.setState({
                                studentClass:e.target.value
                            })
                            console.log(e.target.value)
                        }}/></h3>
                        
                        <h3>班级:<select value={this.state.nameClass} onChange={(e)=>{
                            this.setState({
                                nameClass:e.target.value
                            })
                            console.log(e.target.value)
                        }}>
                            {
                                this.props.list.map((item,index)=>{
                                    return <option name={item.name} key={item.id}>{item.name}</option>
                                })
                            }
                        </select></h3>
                        <h3><button onClick={()=>{
                            //筛选出 删除 然后添加新的
                            this.props.list.filter((item,index)=>{
                                if(item.id==this.props.location.state.classId){
                                    item.studentList.filter((item1,index1)=>{
                                        if(item1.id==this.props.location.state.id){
                                            item.studentList.splice(index1,1)
                                            let obj={
                                                id:this.props.location.state.id,
                                                student:this.state.studentClass,
                                                nameClass:this.state.nameClass
                                            }
                                            this.props.saveNew(obj)
                                            this.props.history.goBack()
                                        }
                                    })
                                }
                            })
                        }}>确定修改</button><button onClick={()=>{
                            //筛选并删除
                            this.props.list.filter((item,index)=>{
                                if(item.id==this.props.location.state.classId){
                                    item.studentList.filter((item1,index1)=>{
                                        if(item1.id==this.props.location.state.id){
                                            item.studentList.splice(index1,1)
                                            this.props.history.goBack()
                                        }
                                    })
                                }
                            })
                        }}>删除学生</button></h3>
                    </div>
                }
            </div>
        );
    }
}
let initMapStateToProps = (state) => {
    return {
        list: state.classreducer
    }
}
let initMapDispatchToProps = (dispatch) => {
    return {
        saveNew:(data)=>{
            dispatch({type:"SAVE_STUDENTS_TWO",data})
        }
    }
}
export default connect(initMapStateToProps, initMapDispatchToProps)(Edit);
