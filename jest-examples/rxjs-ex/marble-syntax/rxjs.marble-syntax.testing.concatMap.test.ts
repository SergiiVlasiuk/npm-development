import { TestScheduler } from 'rxjs/testing'
import { of } from 'rxjs'
import { delay, concatMap } from 'rxjs/operators'
import { expect } from 'chai'

/**
 *  https://rxjs.dev/guide/testing/marble-testing#testing-rxjs-code-with-marble-diagrams
 */
describe('testing-rxjs-concatMap-with-marble-diagrams', () => {
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
      const { cold, expectObservable } = helpers
      const input = ' -a-b-c|'
      const expected = '-- 9ms a 9ms b 9ms (c|)'

      // Depending on your personal preferences you could also
      // use frame dashes to keep vertical alignment with the input.
      // const input = ' -a-b-c|';
      // const expected = '------- 4ms a 9ms b 9ms (c|)';
      // or
      // const expected = '-----------a 9ms b 9ms (c|)';

      const result = cold(input).pipe(concatMap((d) => of(d).pipe(delay(10))))

      expectObservable(result).toBe(expected)
    })
  })
})
