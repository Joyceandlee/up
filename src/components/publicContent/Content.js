import React, { Component } from 'react';

class Content extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {this.props.content.map((item,index)=>{
                    return(
                        <li key={index}>
                            {item}
                        </li>
                    )
                })}
            </div>
        )
    }
}

export default Content