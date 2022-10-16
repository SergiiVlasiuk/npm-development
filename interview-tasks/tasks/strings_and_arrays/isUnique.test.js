const { isUniqueBasedOnSet, isUniqueBasedOnRegExp, isUniqueBasedOnLastIndexChecking } = require('./isUnique')

describe('isUnique', () => {
  const uniqueStr = 'asdfg re'
  const notUniqueStr = 'asdfgs'

  describe('based on set', () => {
    test('should not be unique', () => {
      expect(isUniqueBasedOnSet(notUniqueStr)).toBeFalsy()
    })

    test('should be unique', () => {
      expect(isUniqueBasedOnSet(uniqueStr)).toBeTruthy()
    })
  })

  describe('based on regex', () => {
    test('should not be unique', () => {
      expect(isUniqueBasedOnRegExp(notUniqueStr)).toBeFalsy()
    })

    test('should be unique', () => {
      expect(isUniqueBasedOnRegExp(uniqueStr)).toBeTruthy()
    })
  })

  describe('based on last index verification', () => {
    test('should not be unique', () => {
      expect(isUniqueBasedOnLastIndexChecking(notUniqueStr)).toBeFalsy()
    })

    test('should be unique', () => {
      expect(isUniqueBasedOnLastIndexChecking(uniqueStr)).toBeTruthy()
    })
  })

})
