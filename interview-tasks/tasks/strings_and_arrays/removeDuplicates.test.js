const { removeDuplicates } = require('./removeDuplicates')

describe('Remove duplicates in string', () => {
  const input = 'input data'
  const expected = 'input da'

  test('should ', () => {
    expect(removeDuplicates(input)).toEqual(expected)
  })

})
