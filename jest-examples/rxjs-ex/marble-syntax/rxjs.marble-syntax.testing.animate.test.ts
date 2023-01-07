import { TestScheduler } from 'rxjs/testing'
import { expect } from 'chai'

/**
 *  https://rxjs.dev/guide/testing/marble-testing#api
 */
describe('testing-rxjs-animate-with-marble-diagrams', () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    // asserting the two objects are equal - required
    // for TestScheduler assertions to work via your test framework
    // e.g. using chai.
    expect(actual).deep.equal(expected)
    // expect(actual).toEqual(expected) // jest comparision
  })

  // This test runs synchronously. TODO: use the requestAnimationFrame, but it can be used by browser only.
  xit('generates the stream correctly', () => {
    testScheduler.run((helpers) => {
      const { animate, cold, expectObservable } = helpers
      animate('              ---x---x---x---x')
      const requests = cold('-r-------r------')
      // const requests = cold('-a-------b------')
      /* ... */
      const expected = '     ---a-------b----'
      expectObservable(requests).toBe(expected) // toBe should have different inputs
    })
  })
})
