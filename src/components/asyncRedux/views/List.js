import React, { Component } from 'react';
import {connect} from 'react-redux'

class List extends Component {
    render() {
        return (
            <li onClick={()=>{
                this.props.savedetail(this.props)
            }}>
                {
                    this.props.sort_title
                }
            </li>
        );
    }
}
let mapStateToProps=(state)=>{
   return{

   }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        savedetail:(data)=>{
            dispatch({type:"DETAIL",data})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List);
