import React, { Component } from 'react';
import {request} from '../../request'
import {connect} from 'react-redux'

class Msg extends Component {
    componentWillMount = () => {
      this.props.getData(request)
    };
    
    render() {
        return (
            <div className="msg">
                {
                    this.props.content&&<div dangerouslySetInnerHTML={{__html: this.props.content}} />
                }
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        content:state.listreducer.content
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getData:(request)=>{
            dispatch(request)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Msg);
