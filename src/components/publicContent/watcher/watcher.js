class watcher {
    constructor() {
        this.obj = {}
        window.obj = this.obj
    }

    //发布
    publish(key, msg) {
        if (this.obj[key]) {
            this.obj[key](msg)
        }
    }

    //订阅
    subscribe(key, callback) {
        this.obj[key] = callback
    }
}
export default new watcher()