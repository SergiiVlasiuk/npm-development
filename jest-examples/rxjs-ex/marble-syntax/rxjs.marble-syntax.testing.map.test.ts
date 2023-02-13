import { expect as expectChai } from 'chai'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { TestScheduler } from 'rxjs/testing'

/**
 *  https://rxjs.dev/guide/testing/marble-testing#testing-rxjs-code-with-marble-diagrams
 */
describe('testing-rxjs-delay-with-marble-diagrams', () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    // asserting the two objects are equal - required
    // for TestScheduler assertions to work via your test framework
    // e.g. using chai.
    expectChai(actual).deep.equal(expected)
    // expect(actual).toEqual(expected) // jest comparision
  })

  // This test runs synchronously.
  it('generates the stream correctly', () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable } = helpers
      const frame: string = '-a-b-c-|'
      const source$ = cold(frame, { a: 1, b: 2, c: 3 })
      const actual$ = source$.pipe(map((value) => value * 10))
      const expected = { a: 10, b: 20, c: 30 }
      expectObservable(actual$).toBe(frame, expected)
    })
  })

  it('should compare each emitted value | false positive', () => {
    const source$: Observable<number> = of(1, 2, 3)
    const actual$: Observable<number> = source$.pipe(
      map((value: number) => value * 10)
    )
    const expected: number[] = [10, 20, 30]
    let index: number = 0
    expect.assertions(expected.length)
    actual$.subscribe((value) => expect(value).toBe(expected[index++]))
  })

  it('Should compare each emitted value | second way', () => {
    const source$: Observable<number> = of(1, 2, 3)
    const final$: Observable<number> = source$.pipe(map((v: number) => v * 10))

    const expected: number[] = [10, 20, 30]
    const actual: number[] = []

    final$.subscribe((val) => {
      actual.push(val)
    })

    expect(actual).toEqual(expected)
  })

  describe("incorrect tests, they should be failed by they aren't. Deactivated to reduce errors in the log", () => {
    xit('Should compare each emitted value', (done) => {
      const source$: Observable<number> = of(1, 2, 3)
      const final$: Observable<number> = source$.pipe(
        map((v: number) => v * 10)
      )

      const expected: number[] = [10, 20, 301]
      let index: number = 0

      final$.subscribe((val) => expect(val).toBe(expected[index++]), null, done)
    })

    xit('Should compare each emitted value', (done) => {
      const source$: Observable<number> = of(1, 2, 3)
      const final$: Observable<number> = source$.pipe(
        map((v: number) => v * 10)
      )

      const expected = [10, 20, 302]
      let index = 0
      expect.assertions(expected.length)

      final$.subscribe({
        next: (val: number) => expect(val).toBe(expected[index++]),
        complete: done
      })
    })
  })
})
