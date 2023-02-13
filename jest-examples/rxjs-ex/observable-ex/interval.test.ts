import { mergeMap, delay } from 'rxjs/operators'
import { of, toArray } from 'rxjs'

describe('Subscribe & Assert Testing in RxJS', () => {
  xdescribe('incorrect tests. unstable work', () => {
    it('Should compare emitted with delay values', (done) => {
      const source$ = of('Ready', 'Set', 'Go!').pipe(
        mergeMap((message, index) => of(message).pipe(delay(index * 100)))
      )
      const expected = ['Ready', 'Set', 'must be corrupted']
      let index = 0

      source$.subscribe({
        next: (val) => {
          expect(val).toEqual(expected[index++])
        },
        complete: done
      })
    })
  })

  it('Should compare emitted with delay values via async/await', async () => {
    const source$ = of('Ready', 'Set', 'Go!').pipe(
      mergeMap((message, index) => of(message).pipe(delay(index * 100)))
    )
    const expected = ['Ready', 'Set', 'Go!']

    let res: string[] | string | undefined = await source$.toPromise()
    expect(res).not.toEqual(expected)
    // const res = await source$.pipe(toArray()).toPromise()

    res = await source$.pipe(toArray()).toPromise()
    expect(res).toEqual(expected)
  })
})
