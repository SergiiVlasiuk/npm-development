const { rotate, rotate180, rotate270 } = require('./rotateMatrix')

describe('rotate', () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  const expected90 = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ]

  const expected180 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
  ]

  const expected270 = [
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7]
  ]

  test('90 \'', () => {
    expect(rotate(matrix)).toEqual(expected90)
  })

  // test('180 \'', () => {
  //   expect(rotate180(matrix)).toEqual(expected180)
  // })

  // test('270 \'', () => {
  //   expect(rotate270(matrix)).toEqual(expected270)
  // })
})
