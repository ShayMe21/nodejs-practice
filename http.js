const http = require('http')

var options = {
  host: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET'
}

console.log('Making the GET request now.')

http.get(options, (response) => {
  console.log(response.statusCode);
  response.pipe(process.stdout);
})
