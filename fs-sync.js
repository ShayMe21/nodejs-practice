const fs = require('fs')

if (fs.existsSync("temp")) {
  console.log("Temp Directory Exists, removing...")
  if (fs.existsSync('temp/new.txt')) {
    fs.unlinkSync('temp/new.txt')
  }
  fs.rmdirSync('temp')
}

fs.mkdirSync('temp')
if (fs.existsSync('temp')) {
  process.chdir('temp')
  fs.writeFileSync('test.txt', 'This is some test text in temp folder.')
  fs.renameSync('test.txt', 'renamed.txt')
  console.log('File has size: ' + fs.statSync('renamed.txt').size + ' bytes')
  console.log('File contents: ' + fs.readFileSync('renamed.txt').toString())
}