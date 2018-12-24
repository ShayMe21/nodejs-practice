const doubler = require('./evenDoubler');

process.on('message', (m) => {
  if (m.cmd === 'double'){
    console.log(`hs: I was asked to double: ${m.number}`)
    doubler.evenDoubler(m.number, (err, result) => {
      process.send({answer: result})
    })
  } else if (m.cmd ==='done') {
    process.exit();
  }
})