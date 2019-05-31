import I from '../lib/i'

module.exports = function (unionBy) {
  return function () {
    it('returns empty list for empty input', () => {
      unionBy(I, [], []).should.deep.equal([])
    })

    it('returns a combined list of unique values based on predicate', () => {
      const pred = (o) => o.foo
      const input1 = [ {foo: 1}, {foo: 2}, {foo: 2}, {foo: 3} ]
      const input2 = [ {foo: 2}, {foo: 3}, {foo: 4} ]
      const expected = [ {foo: 1}, {foo: 2}, {foo: 3}, {foo: 4} ]
      unionBy(pred, input1, input2).should.deep.equal(expected)
    })

    it('keeps left most value for duplicate values', () => {
      const input1 = [ 2, 3, 2, 2 ]
      const input2 = [ 4, 5, 6, 5, 2 ]
      unionBy(I, input1, input2).should.deep.equal([2, 3, 4, 5, 6])
    })
  }
}
