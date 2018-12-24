// https://nodejs.org/api/cluster.html
const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length;


var numWorkers = numCPUs;

if (cluster.isMaster){

  console.log(`Master process #${process.pid} is running`)

  // Fork Workers
  for (let i=0;i<numWorkers;i++){
    console.log("Master: About to Fork a Woker")
    cluster.fork()
  }

  cluster.on('fork', (worker) => {
    console.log(`Master: Fork Event (Worker ${worker.id})`) 
  })

  cluster.on('online', (worker) => {
    console.log(`Master: Online Event (Worker ${worker.id})`) 
  })

  cluster.on('listening', (worker, addr) => {
    console.log(`Master: Listening Event (Worker ${worker.id}), pid ${worker.process.pid}, ${addr.address}:${addr.port}`) 
  })

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Master: Exit Event (Worker ${worker.id} died)`) 
  })

} else {
  console.log(`Worker # ${cluster.worker.id} is ready!`)

  var count = 0;

  // Workers can share any TCP connection here
  http.createServer((req, res) => {
    res.writeHead(200)

    count++;
    console.log(`Worker # ${cluster.worker.id} is incrementing count to ${count}`)
    res.end(`Hello world from Worker # ${cluster.worker.id} (pid ${cluster.worker.process.pid}) with count of ${count}`)

      if (count === 4){
        cluster.worker.destroy();
      }

  }).listen(8080, '127.0.0.1')
  
}