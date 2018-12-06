const EventEmitter = require('events')

const myEventEmitter = new EventEmitter()

myEventEmitter.on('start', () => console.log('started'))

myEventEmitter.emit('start')
