import React, { Component } from 'react';

class Item extends Component {
    render() {
        console.log(this.props.location.state.name)
        return (
            <div>
                item
                    {
                        this.props.location.state.name&&<h4>name:{this.props.location.state.name}</h4>
                    }
            </div>
        );
    }
}

export default Item;
