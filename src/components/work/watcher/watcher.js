class watcher {
    constructor() {
        this.obj = {}
        window.obj = this.obj
    }

    publish(key, msg) {
        if (this.obj[key]) {
            this.obj[key](msg)
        }
    }

    subscribe(key, callback) {
        this.obj[key] = callback
    }
}
export default new watcher()