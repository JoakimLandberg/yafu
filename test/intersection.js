module.exports = function (intersection) {
  return function () {
    it('should return empty array for empty input arrays', () => {
      intersection([], []).should.deep.equal([])
    })

    it('should return an array of unique values included in both arrays', () => {
      const A = [1, 2, 3, 4, 5, 6]
      const B = [4, 5, 6, 7, 8]
      intersection(A, B).should.deep.equal([4, 5, 6])
    })

    it('should handle duplicate values in input arrays', () => {
      const A = [1, 2, 3, 1, 2, 3]
      const B = [2, 2, 3, 3]
      intersection(A, B).should.deep.equal([2, 3])
    })
  }
}
