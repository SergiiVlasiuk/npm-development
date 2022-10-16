const { isStringRotated } = require('./rotate')

describe('Is string rotated', () => {

  test('scriptjava is rotated javascript', () => {
    expect(isStringRotated('javascript', 'scriptjava')).toBeTruthy()
  })

  test('java is not rotated javascript', () => {
    expect(isStringRotated('javascript', 'scriptjava')).toBeTruthy()
  })

})
