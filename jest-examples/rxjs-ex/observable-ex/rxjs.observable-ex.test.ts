import { of } from 'rxjs'
import { take } from 'rxjs/operators'

describe('observable examples', () => {
  describe('async testing mode', () => {
    it('should fetch the right data', (done) => {
      of(false).subscribe((data: boolean) => {
        // expect(data).toBe(true) // false
        expect(data).not.toBe(true)
        done()
      })
    })

    xdescribe('incorrect async tests. they should be failed', () => {
      it('should be failed but it is not because of subscribable object where error is "null"', (done) => {
        expect.assertions(1)
        of(false)
          .pipe(take(1))
          .subscribe(
            (val: boolean) => expect(val).toBeTruthy(),
            // (val: boolean) => expect(val).toBeFalsy(),
            null,
            done
          )
      })
      it("should be failed but it isn't because error block", (done) => {
        expect.assertions(1)
        of(false)
          .pipe(take(1))
          .subscribe({
            next: (val: boolean) => {
              expect(val).toEqual(true)
              // expect(val).toBeTruthy()
              // expect(val).toBeFalsy()
              // expect(val).toEqual(false)
            },
            error: (error) => {
              console.log('error: ', error)
              throw error
            },
            complete: done
          })
      })
    })
  })

  describe('sync testig mode', () => {
    beforeEach(() => {
      jest.useFakeTimers()
    })

    afterEach(() => {
      jest.clearAllTimers()
    })

    it('correct assertion of subscribed object', () => {
      expect.assertions(2)
      of(false).subscribe((val: boolean) => {
        // expect(val).toEqual(true)
        // expect(val).toBeTruthy()
        expect(val).toEqual(false)
        expect(val).toBeFalsy()
      })
      jest.runAllTimers()
    })
  })
})
