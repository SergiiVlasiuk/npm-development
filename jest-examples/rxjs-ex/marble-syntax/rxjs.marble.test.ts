import { TestScheduler } from 'rxjs/testing'
import { concatWith, map } from 'rxjs/operators'
import { Observable } from 'rxjs'

describe('Marble testing in RxJS', () => {
  let testScheduler: TestScheduler

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })
  })

  it('Should convert ASCII diagrams into observables', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const source$ = cold('--a-b---c')
      const expected = '--a-b---c'

      expectObservable(source$).toBe(expected)
    })
  })

  it('Should allow configuration of emitted values', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const source$ = cold('--a-b---c', { a: 1, b: 2, c: 3 })
      const final$ = source$.pipe(map((v) => v * 10))
      const expected = '--a-b---c'

      expectObservable(final$).toBe(expected, { a: 10, b: 20, c: 30 })
    })
  })

  it('Should concat two streams', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const sourceOne$: Observable<string> = cold('-a---b-|')
      const sourceTwo$: Observable<string> = cold('-c---d-|')
      const final$: Observable<string> = sourceOne$.pipe(concatWith(sourceTwo$))

      const expected = '-a---b--c---d-|'

      expectObservable(final$).toBe(expected)
    })
  })

  it('Should let you identify subscription points', () => {
    testScheduler.run(({ cold, expectObservable, expectSubscriptions }) => {
      const sourceOne$ = cold('-a---b-|')
      const sourceTwo$ = cold('-c---d-e|')
      const final$ = sourceOne$.pipe(concatWith(sourceTwo$))

      const expected = '-a---b--c---d-e|'
      const sourceOneExpected = '^------!'
      const sourceTwoExpected = '-------^-------!'

      expectObservable(final$).toBe(expected)
      expectSubscriptions(sourceOne$.subscriptions).toBe(sourceOneExpected)
      expectSubscriptions(sourceTwo$.subscriptions).toBe(sourceTwoExpected)
    })
  })
})
