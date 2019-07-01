// import { VIDEO } from './api/api'

export let requestVideo = function(fn, id) {
    fetch("/api/url/index?movid=2596&urlid=" + id + "&app=fytv&device=android&version=3.0.2")
        .then(res => { return res.json() })
        .then(data => fn && fn(data))
        // fetch("/api/movie/index?movid=2596&app=fytv&device=android&version=3.0.2")
        //     .then(res => { return res.json() })
        //     .then(data => {
        //         console.log(data)
        //         next({ type: "GET", data: data.urls })
        //     })
}


export let request = function(next) {
    fetch('/api/movie/index?movid=2596&app=fytv&device=android&version=3.0.2')
        .then(res => { return res.json() })
        .then(data => next({ type: "GET_MSG", data: data }))
}