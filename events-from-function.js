// Events and The EventEmitter class
// Publish and Subscribe to events
// Partial results before error

var EventEmitter = require('events').EventEmitter;

var getResource = c => {
  var e = new EventEmitter();
  process.nextTick(() => {   // on the next tick of the event loop.
    var count = 0;
    e.emit('start');
    var t = setInterval(() => {   // Every 10 seconds, emit a data event c times
      e.emit('data', ++count);
      if (count == c){
        e.emit('end' , count);
        clearInterval(t);
      }
    }, 10);
  });
  return (e);
}

let r = getResource(5);

// The Subscribers
r.on('start', () => {
  console.log("The process has been started!");
});

r.on('data', (data) => {
  console.log("The received data is -> " + data);
});

r.on('end', (items) => {
  console.log("The process has been finished with " + items + " items!");
});




