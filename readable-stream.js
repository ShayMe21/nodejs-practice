const request = require('request')

var s = request('https://auth0.com')

s.on('data', (chunk) => {
  console.log(">>>DATA>>> " + chunk)
})


s.on('end', ()=> {
  console.log("Done receiving data.")
})

