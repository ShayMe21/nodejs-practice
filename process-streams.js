// https://nodejs.org/api/process.html#process_process_stdin
// Streams starts paused

process.stdin.resume()

process.stdin.setEncoding('utf8')

process.stdin.on('data', (d) => {
  process.stdout.write("Data -> " + d)
});

process.stdin.on('end', () => {
  process.stderr.write("End!\n")
});

process.on('SIGINT', () => {
  process.stdout.write("\nExiting gracefully!\n")
  process.exit(0);
})