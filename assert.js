const assert = require('assert')
const evenDoubler = require('./callbacks-async') 

assert.equal(evenDoubler.evenDoublerSync(2), 4)

assert.throws( () => {
  evenDoubler.evenDoublerSync(3)
}, /Odd/)
// Exception should have the word "Odd" in it.

evenDoubler.evenDoubler(2, (err, results) => {
  assert.ifError(err)
  assert.equal(results, 4, "evenDoubler failed on an even number.")
})

evenDoubler.evenDoubler(3, (err, results) => {
  assert.notEqual(err, null)
})
