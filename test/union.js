module.exports = function (union) {
  return function () {
    const A = ['1', '2', '3']
    const B = ['4', '2', '3', '1', '5', '4']

    it('should return a list without duplicates', () => {
      union(A, B).should.deep.equal(['1', '2', '3', '4', '5'])
    })
  }
}
