const EventEmitter = require('events')


class Logger extends EventEmitter {
    log(message) {
        console.log(message)
        this.emit('eventTriggered',[3,4,5,6])
    }
}

module.exports = Logger