import { reverseWords } from './map.examples'

describe('[Observable, map] Reverse words in the specified string.', () => {
  test('"Hello World" should be "World Hello"', (done) => {
    reverseWords('Hello World').subscribe((data) => {
      expect(data).toBe('World Hello')
      done()
    })
  }, 20)
})
