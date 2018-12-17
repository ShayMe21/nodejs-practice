// https://nodejs.org/api/buffer.html
// Javascript's way to working with binary data such as TCP streams, fiel system operations etc.

let buffer = new Buffer.from("Hello World")
const buffer2 = Buffer.alloc(8)  // uninitialized buffer

console.log(buffer)
console.log(buffer.toString())
console.log(buffer.toString('base64'))
console.log(buffer.toString('utf8',0,2))
console.log(buffer2)