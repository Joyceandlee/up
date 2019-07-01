import React, { Component } from 'react';
import { connect } from 'react-redux'
class Del extends Component {
    render() {
        return (
            <div>
                <h3>Del</h3>
                {
                    this.props.list.map((item1, index) => {
                        return <h3 key={item1.id}><span>{item1.name}</span>班----------------------<button onClick={() => {
                            this.props.list.filter((item, index) => {
                                if (item.id == item1.id) {
                                    return this.props.list.splice(index, 1)
                                }
                            })
                            this.props.history.push('/del')//删除重新渲染
                        }}>删除</button></h3>
                    })
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

    }
}
export default connect(initMapStateToProps, initMapDispatchToProps)(Del);
