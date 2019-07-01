import React, { Component } from 'react';
import List from './List'
import './css/home.css'
import watcher from './watcher/watcher'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [{
                id: 1,
                msg: "大家好我是小丸子1",
                img: "https://b-ssl.duitang.com/uploads/item/201707/01/20170701164959_WwCA4.thumb.224_0.gif",
                content: [],
                price: 0
            }, {
                id: 2,
                msg: "大家好我是小丸子2",
                img: "https://b-ssl.duitang.com/uploads/item/201707/01/20170701164959_WwCA4.thumb.224_0.gif",
                content: [],
                price: 0
            }, {
                id: 3,
                msg: "大家好我是小丸子3",
                img: "https://b-ssl.duitang.com/uploads/item/201707/01/20170701164959_WwCA4.thumb.224_0.gif",
                content: [],
                price: 0
            }]
        }
    }

    render() {
        return (
            <div>
                <button>发布</button>
                <List list={this.state.list} />
            </div>
        )
    }

    componentDidMount() {
        watcher.subscribe('home', this.changePrice.bind(this))
        watcher.subscribe('home2', this.changeContent.bind(this))
    }
    //添加评论
    changeContent(msg) {
        let { id, content } = msg
        this.state.list.filter((item) => {
            if (item.id == id) {
                return item.content.push(content)
            }
        })

        this.setState({
            list: this.state.list
        })

        console.log(this.state.list)
    }

    //点赞
    changePrice(id) {
        this.state.list.filter((item) => {
            if (item.id == id) {
                return item.price = item.price + 1
            }
        })

        this.setState({
            list: this.state.list
        })

    }
}

export default Home