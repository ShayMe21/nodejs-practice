// https://nodejs.org/api/child_process.html

const exec = require('child_process').exec

let child = exec('uptime | cut -d "," -f 1', (err, stdout, stderr) => {
  if (err){
    console.log(`Error: ${stderr}`)
  } else {
    console.log(`Output: ${stdout}`)
  }
})

console.log(`PID: ${child.pid}`)