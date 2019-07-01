import React, { Component } from 'react';

class Detail extends Component {
    
    render() {
        return (
            <div>
                <h3>{this.props.location.state.name}</h3>
                <video width="100%" src={this.props.location.state.url} autoPlay controls></video>
            </div>
        );
    }
    componentWillMount(){
        if(localStorage.getItem("token")){
                       console.log(123)             
        }else{
            this.props.history.replace('/login')
        }
    }
}

export default Detail;
