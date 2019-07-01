import React, { Component } from 'react';


function hocComponent(Component,color){
    return class Hoc extends React.Component{
        constructor(props){
            super(props)
            // console.log(props,color)
            this.state={
                name:"Kitty",
                style:{
                    background:props.color||color||'pink'
                }
            }
        }
        render(){
            // console.log(this.props.color,"hocComponent=>color")
            return(
                <div style={this.state.style}>
                    <Component {...this.props}/>
                </div>
            )
        }
    }
}

export default hocComponent;
