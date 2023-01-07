import { TestScheduler } from 'rxjs/testing'
import { delay } from 'rxjs/operators'
import { expect } from 'chai'

/**
 *  https://rxjs.dev/guide/testing/marble-testing#testing-rxjs-code-with-marble-diagrams
 */
describe('testing-rxjs-delay-with-marble-diagrams', () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    // asserting the two objects are equal - required
    // for TestScheduler assertions to work via your test framework
    // e.g. using chai.
    expect(actual).deep.equal(expected)
    // expect(actual).toEqual(expected) // jest comparision
  })

  // This test runs synchronously.
  it('generates the stream correctly', () => {
    testScheduler.run((helpers) => {
      const { time, cold, expectObservable } = helpers
      const source = cold('---a--b--|')
      const t = time('        --|    ')
      //                         --|
      const expected = '   -----a--b|'
      const result = source.pipe(delay(t))
      expectObservable(result).toBe(expected)
    })
  })
})
