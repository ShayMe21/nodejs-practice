const os = require('os')

function toMb(v){
  return(Math.round((v/1024/1024)*100)/100);
}

console.log("Host: " + os.hostname())
console.log("15 min. Load Average: " + os.loadavg()[2])
console.log(toMb(os.freemem()) + " of " + toMb(os.totalmem()) + " Mb free")
