import axios from 'axios'

export let requestMock = function(next) {
    axios.get('/data', { dataType: 'json' }).then(res => {
        // this.setState({ news: res.data.list })

        let list = res.data.list
        next({ type: "ADD", data: list })
    })
}