import React, { Component } from 'react';
import { connect } from 'react-redux'
import { requestVideo } from '../request'

class Detail extends Component {
    state = {
        url: ''
    }
    render() {
        console.log(this.state)
        return (
            <div>
                {
                    this.props.video.type == 1 && <video src={this.state.url} autoPlay controls></video>
                }
                {
                    this.props.video.type == 2 && <audio src={this.state.url} autoPlay controls></audio>
                }
            </div>
        );
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps)
        if (nextProps.video !== this.props.video) {
            requestVideo(this.getResult.bind(this), nextProps.video.urlid)
        }
        return true
    }

    getResult(data) {
        this.props.video.type == 1 ? this.setState({
            url: data.url_1
        }) : this.setState({
            url: data.url_5
        })

        // if (this.props.video.type == 1) {
        //     this.setState({
        //         url: data.url_1
        //     })
        // } else {
        //     this.setState({
        //         url: data.url_5
        //     })
        // }


    }
}
let mapStateToProps = (state) => {
    // console.log(state)
    return {
        video: state.detailreducer
    }
}

export default connect(mapStateToProps)(Detail);
