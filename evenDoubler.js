// Node's Event loop and non-blocking /O
// Writing Asynchronous code with callbacks
// Request / Reply
// No Result until results are returned
// Eighter result or error

// Double the input if it is even
// throw error if input is odd

const maxTime = 1000; 

function getRandTime(maxInMs) {
  return Math.floor(Math.random() * (maxInMs+1));
}

var evenDoubler = (v, callback) => {
  let startTime = process.hrtime();

  setTimeout(() => {
    let endTime = t = process.hrtime(startTime);  //returns diff in time in Array['seconds', 'ns']

    if (v % 2 == 0){
      callback(null, v*2, Math.round(endTime[1]/1000000));
    } else {
      callback({message: "Odd number"});
    }
  }, getRandTime(maxTime));
}

var evenDoublerSync = (v) => {
  if (v%2){
    throw (new Error('Odd Number'));
  } else {
    return v*2
  }
}

var handleResults = (err, results, time) => {
  if (err){
    console.log('\x1b[31m%s\x1b[0m', "ERROR: " + err.message);
  } else {
    console.log("The doubled result is: " + results + " (took " + time + " ms)");
  }
}

// for (let i=0; i<10;i++){
//   console.log("Calling evenDoubler function for value: " + i);
//   evenDoubler(i, handleResults);
// }

console.log("-------");

module.exports.evenDoubler = evenDoubler;
module.exports.evenDoublerSync = evenDoublerSync;