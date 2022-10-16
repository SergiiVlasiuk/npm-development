const { highestFrequencyWithLoop, highestFrequencyWithCollection } = require('./highestFriquency')

describe('highest frrequency', () => {
  const input = ['asd', 'sdf', 'edc', 'sdf', 'edc']
  const expected = 'sdf'

  describe('with loop', () => {
    test(`should be ${expected}`, () => {
      expect(highestFrequencyWithLoop(input)).toEqual(expected)
    })
  })

  describe('with collection', () => {
    test(`should be ${expected}`, () => {
      expect(highestFrequencyWithCollection(input)).toEqual(expected)
    })
  })

})
