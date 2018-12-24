const fork = require('child_process').fork
var child = fork(__dirname + '/doubler-app.js')

child.on('message', (m) => {
  console.log(`Answer is: ${m.answer}`)
  child.send({cmd: 'done'})
})

child.send({cmd: 'double', number:  20})