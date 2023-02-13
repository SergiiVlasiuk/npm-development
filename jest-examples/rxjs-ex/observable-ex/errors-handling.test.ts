import { of } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

describe('Subscribe & Assert Testing in RxJS', () => {
  xdescribe('incorrect tests', () => {
    it('Should let you test errors and error messages', (done) => {
      const source$ = of({ first: 'Elon', last: 'Musk' }).pipe(
        map((v) => `${v.first} ${v.last}`)
      )

      const expected = 'Elon Musk'

      source$.subscribe({
        next: (val) => expect(val).toBe(expected),
        complete: done
      })
    })

    it('Should let you test errors and error messages | false positive', () => {
      const source$ = of({ first: 'Elon', last: 'Musk' }, null).pipe(
        map((v) => `${v!.first} ${v!.last}`),
        catchError(() => {
          throw 'Invalid Name' // eslint-disable-line no-throw-literal
          // throw new Error('Invalid Name');
          // return  $$.throwError(new Error('Invalid Name'));
        })
      )

      const expected = 'Elon Musk'

      source$.subscribe({
        next: (val) => {
          expect(val).toBe(expected)
        },
        error: (err) => {
          expect(err).toBe('Invalid Name')
          // expect(err).toEqual(new Error('Invalid Name'));
        }
      })
    })
  })

  it('Should let you test errors and error messages', (done) => {
    const source$ = of({ first: 'Elon', last: 'Musk' }, null).pipe(
      map((v) => `${v!.first} ${v!.last}`),
      catchError(() => {
        throw 'Invalid Name' // eslint-disable-line no-throw-literal
        // throw new Error('Invalid Name');
        // return  $$.throwError(new Error('Invalid Name'));
      })
    )

    const expected = 'Elon Musk'

    source$.subscribe({
      next: (val) => {
        expect(val).toBe(expected)
      },
      error: (err) => {
        expect(err).toBe('Invalid Name')
        // expect(err).toEqual(new Error('Invalid Name'));
        done()
      },
      complete: done
    })
  })

  it('Should let you test errors and error messages', () => {
    const source$ = of({ first: 'Elon', last: 'Musk' }, null).pipe(
      map((v) => `${v!.first} ${v!.last}`),
      catchError(() => {
        throw 'Invalid Name' // eslint-disable-line no-throw-literal
        // throw new Error('Invalid Name');
        // return  $$.throwError(new Error('Invalid Name'));
      })
    )

    const expected = ['Elon Musk', 'Invalid Name']
    const res: any[] = []

    source$.subscribe({
      next: (val) => {
        res.push(val)
      },
      error: (err) => {
        res.push(err)
      }
    })

    expect(res).toEqual(expected)
  })
})
