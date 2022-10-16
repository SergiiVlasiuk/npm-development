const arraySubset = require('./subset')

describe('is array subset of other array', () => {
  test('[1, 2, 3] is subset of [2, 1, 3]', () => {
    expect(arraySubset([2, 1, 3], [1, 2, 3])).toBeTruthy()
  })

  test('[1, 2, 3] is subset of [2, 1, 1, 3]', () => {
    expect(arraySubset([2, 1, 1, 3], [1, 2, 3])).toBeTruthy()
  })

  test('[1, 3, 3] is subset of [1, 1, 1, 3]', () => {
    expect(arraySubset([1, 1, 1, 3], [1, 3, 3])).toBeFalsy()
  })

  test('[1, 2, 3] is subset of [1, 2]', () => {
    expect(arraySubset([1, 2], [1, 2, 3])).toBeFalsy()
  })

})
