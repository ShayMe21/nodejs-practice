const request = require('request')
const fs = require('fs')
const zlib = require('zlib');

request('https://auth0.com').pipe(process.stdout)

// request('https://auth0.com').pipe(fs.createWriteStream('auth0.html'))

request('https://auth0.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('auth0.html.gz'));