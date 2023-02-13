import { map, delay } from 'rxjs/operators'
import { of, toArray } from 'rxjs'

describe('Subscribe & Assert Testing in RxJS', () => {
  xdescribe('incorrect tests.', () => {
    it('Should compare emitted values on completion with toArray', (done) => {
      const source$ = of(1, 2, 3)
      const final$ = source$.pipe(map((v: number) => v * 10))
      const expected = [10, 20, 30]

      final$.pipe(toArray()).subscribe({
        next: (val) => {
          expect(val).toEqual(expected) // the test doesn't fail if 'expected' is incorrect also
        },
        complete: done
      })
    })
  })
  it('Should compare emitted values on completion with toArray', () => {
    const source$ = of(1, 2, 3)
    const final$ = source$.pipe(map((v: number) => v * 10))
    const expected = [10, 20, 30]
    let res: number[]

    final$.pipe(toArray()).subscribe((val: number[]) => (res = val))

    expect(res!).toEqual(expected)
  })
  it('Should compare emitted values on completion with toArray', async () => {
    const source$ = of(1, 2, 3)
    const final$ = source$.pipe(map((v: number) => v * 10))
    const expected = [10, 20, 30]

    const res = final$.pipe(toArray()).toPromise()

    expect(await res).toEqual(expected)
  })
  it('Should compare emitted values on completion with toArray', async () => {
    const source$ = of(1, 2, 3)
    const final$ = source$.pipe(
      map((v: number) => v * 10),
      delay(100) // <-----
    )
    const expected = [10, 20, 30]

    const res = await final$.pipe(toArray()).toPromise()

    expect(res).toEqual(expected)
  })
})
