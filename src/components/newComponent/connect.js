import React from 'react'

export default function connect(color){
    return function(Component){
        return class extends React.Component{
            constructor(props){
                super(props)
                this.state={
                    style:{
                        background:props.color||color||'purple'
                    }
                }
            }
            render(){
                return (
                    <div style={this.state.style}>
                        <Component/>
                    </div>
                )
            }
        }
    }
}