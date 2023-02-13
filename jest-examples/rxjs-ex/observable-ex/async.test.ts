import { map } from 'rxjs/operators'
import { noop, timer } from 'rxjs'

describe('Subscribe & Assert Testing in RxJS', () => {
  it('ok', noop)

  xdescribe('incorrect testing the tests can be passed with incorrect expectation in their structure', () => {
    it('Wait async value', () => {
      const source$ = timer(100)
      const final$ = source$.pipe(map(() => 10))
      let res: number

      final$.subscribe({
        next: (val: number) => (res = val)
      })

      expect(res!).toBe(10)
    })

    it('Wait async value', (done) => {
      const source$ = timer(100)
      const final$ = source$.pipe(map(() => 10))
      let res: number

      final$.subscribe({
        next: (val) => (res = val),
        complete: done
      })

      expect(res!).toBe(10)
    })

    it('Wait async value', (done) => {
      const source$ = timer(100)
      const final$ = source$.pipe(map(() => 10))

      final$.subscribe({
        next: (val) => {
          expect(val).toBe(10)
        },
        complete: done
      })
    })
  })
})
