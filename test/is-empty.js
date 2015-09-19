const isEmpty = require('../lib/is-empty')

describe('isEmpty', function () {

  it('should return true for an empty array', function () {
    isEmpty([]).should.equal(true)
  })

  it('should return false for a non empty array', function () {
    isEmpty([ 1 ]).should.equal(false)
  })

})
