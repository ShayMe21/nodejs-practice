const resource = require('./events-resource');

var myResource = new resource(10);

// The Subscribers
myResource.on('start', () => {
  console.log("I have started!");
});

myResource.on('data', (data) => {
  console.log("I received data -> " + data);
});

myResource.on('end', (items) => {
  console.log("I have processed " + items + " items!");
});

