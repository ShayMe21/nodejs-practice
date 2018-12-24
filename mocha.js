const should = require('should')
const evenDoubler = require('./evenDoubler')

describe('Maths4Fun', () => {
  describe('When used synchronously', () => {
    it('Should double the numbers correctly.', () => {
      evenDoubler.evenDoublerSync(2).should.equal(4)
    })

    it('Should throw an exception on Odd numbers', (done) => {
      (() => {
        evenDoubler.evenDoublerSync(3)
      }).should.throw(/Odd/)
      done()
    })

  })

  describe('When used asynchronously', () => {
    it('Should double numbers correctly.', (done) => {
      evenDoubler.evenDoubler(2, (err, results) => {
        should.not.exist(err)
        results.should.equal(4)
        done()
      })
    })

    it('Should return error for Odd numbers', (done) => {
      evenDoubler.evenDoubler(3, (err, results) => {
        should.exist(err)
        should.not.exist(results)
        done()
      })
    })


  })
})