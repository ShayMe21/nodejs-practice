const http = require('http')
const fs = require('fs')

const hostname = 'localhost'
const port = 3000

var server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  console.log(req.url);
  if (req.url === '/file.txt'){
    console.log(__dirname)
    fs.createReadStream(`${__dirname}/file.txt`).pipe(res)
  } else {
    res.end("Hello World!")
  }
})

server.on('listening',function(){
  console.log('ok, server is running');
});

console.log(`Server running at http://${hostname}:${port}/`)


server.listen(hostname, port)