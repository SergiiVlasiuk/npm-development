const { flattenByRecursion, flattenByInnerCollection } = require('./flatten')

describe('flat array', () => {
  describe('with recursion', () => {
    test('should return one-dimensional array', () => {
      expect(flattenByRecursion([1, [2, [3], 4], 5])).toEqual([1, 2, 3, 4, 5])
    })
  })

  describe('with Array object', () => {
    test('should return one-dimensional array', () => {
      expect(flattenByInnerCollection([1, [2, [3], 4], 5])).toEqual([1, 2, 3, 4, 5])
    })
  })

})
