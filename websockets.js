const http = require('http')
const socketio = require('socket.io')
const fs = require('fs')

var handler = (req, res) => {

  fs.readFile(__dirname + '/index.html', (err, data) => {
    if (err) {
      res.writeHead(500)
      return res.end('Error Loading index.html')
    } else {
      res.writeHead(200)
      res.end(data)
    }
  })
}

var app = http.createServer(handler)
var io = socketio.listen(app)

// Listen for incoming sockets
io.sockets.on('connection', (socket) => {
  socket.on('disconnect', function(){
    console.log('client disconnected');
  });

  setInterval(() => {
    let timestamp = Date.now()
    console.log('Emitted: ' + timestamp)
    socket.emit('timer', timestamp)
  }, 2000)

  socket.on('chat', (data) => {
    if (data === ""){
      socket.emit('response', 'failed')
    } else {
      console.log('Client sent: ' + data)
      socket.emit('response', 'success')
    }
  })
})

app.listen(8080)
console.log('Server is running!')
