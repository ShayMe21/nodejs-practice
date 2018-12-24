var spawn = require('child_process').spawn,
    ps    = spawn('ps', ['ax']),
    grep  = spawn('grep', ['node']);

    ps.stdout.pipe(grep.stdin)
    grep.stdout.pipe(process.stdout)

    ps.stderr.on('data', (data) => {
      console.log(`ps stderr: ${data}`)
    })

    grep.on('data', (data) => {
      console.log(`grep stderr: ${data}`)
    })