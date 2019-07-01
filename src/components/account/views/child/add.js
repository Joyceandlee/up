import React, { Component } from 'react';
import Footer from './Footer'
import '../../css/add.css'
// import store from '../../store/index'
import {connect} from 'react-redux'

class Add extends Component {
    state={
        cost:'',
        date:new Date().toLocaleDateString().replace(/\//g,"-")+"   "+ new Date().toTimeString().substr(0, 8),
        choose:'工资',
        notes:''
    }
    render() {
        return (
            <div className="add">
                <header><h3>Add bill</h3></header>
                <main>
                    <div>
                        填入费用：<input type="text" value={this.state.cost} onChange={(e)=>{
                            this.setState({
                                cost:e.target.value
                            })
                        }}/>(元)
                    </div>
                    <div>
                        选择时间：<input type="text" value={this.state.date} onChange={(e)=>{
                            this.setState({
                                date:e.target.value
                            })
                        }}/>
                    </div>
                    <div>
                        账目类型：<select name="" id="" value={this.state.choose} onChange={(e)=>{
                            this.setState({
                                choose:e.target.value
                            })
                        }}>
                            <option value="工资">工资</option>
                            <option value="餐饮">餐饮</option>
                            <option value="购物">购物</option>
                            <option value="打车">打车</option>
                            <option value="住房">住房</option>
                        </select>
                    </div>
                    <div>
                        <textarea id="" cols="40" rows="10" placeholder="填写备注" value={this.state.notes} onChange={(e)=>{
                            this.setState({
                                notes:e.target.value
                            })
                        }}></textarea>
                    </div>
                    <div>
                        <button className="button" onClick={this.save.bind(this)}>保存</button>
                        <button  className="button" type="button">取消</button>
                    </div>
                </main>
                <footer>
                    <Footer className="footer" />
                </footer>
            </div>
        );
    }
    save(){
        let {cost,date,choose,notes} =this.state

        let obj={
            cost,date,choose,notes
        }

        this.props.saveTostore(obj)
    }
}
let mapStateToProps = (state, ownProps) => {
    return {
       
    }
}
let mapDispatchToProps = (dispatch, ownProps) => {
    return {
        saveTostore: (obj) => {
            console.log(obj)
            dispatch({type:'ADD_NOTES',obj})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Add);
