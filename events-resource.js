const EventEmitter = require('events').EventEmitter;

class Resource extends EventEmitter {
  constructor(count){
    super();
    this.start(count);
  }

  start(count){
    var maxCount = count;
    process.nextTick(() => {   // on the next tick of the event loop.
      var count = 0;
      this.emit('start');
      var t = setInterval(() => {   // Every 10 seconds, emit a data event c times
        this.emit('data', ++count);
        if (maxCount === count){
          this.emit('end' , count);
          clearInterval(t);
        }
      }, 10);
    });
  }
}

module.exports = Resource;