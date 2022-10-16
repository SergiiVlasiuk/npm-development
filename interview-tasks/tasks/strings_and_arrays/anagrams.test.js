const allAnagrams = require('./anagrams')

describe('all anagrams', () => {
  test(`['abcd', 'bdac', 'cabd'] are anagrams`, () => {
    expect(allAnagrams(['abcd', 'bdac', 'cabd'])).toBeTruthy()
  })

  test(`['abcd', 'bdxc', 'cabd'] are not anagrams`, () => {
    expect(allAnagrams(['abcd', 'bdxc', 'cabd'])).toBeFalsy()
  })

})
