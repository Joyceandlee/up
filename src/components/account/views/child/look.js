import React, { Component, Fragment } from 'react';
import Footer from './Footer'
import { connect } from 'react-redux'
import '../../css/look.css'

class Look extends Component {
    render() {
        return (
            <div className="add">
                <header><h3>check bill</h3></header>
                <main>
                    {
                        this.props.prop.map((item, index) => {
                            return <Fragment key={index}>
                                <div>
                                    <span>{item.cost}</span>
                                    <span>{item.date}</span>
                                    <span>{item.choose}</span>
                                    <span>{item.notes}</span>
                                </div>
                            </Fragment>
                        })
                    }
                    <div className="total">总计：{this.props.total}</div>
                </main>
                <footer><Footer /></footer>
            </div>
        );
    }

    componentWillReceiveProps() {
        this.props.saveTotal(this.props.total)
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    let total = 0;
    state.listReducer.forEach((item, index) => {
        let bill = item.cost * 1
        if (item.choose == '工资') {
            total += bill
        } else {
            total -= bill
        }
    })

    return {
        prop: state.listReducer,
        total: total
    }
}
let mapDispatchToProps = (dispatch, ownProps) => {
    return {
        saveTotal: (total) => {
            dispatch({ type:"TOTAL_K", total })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Look);
