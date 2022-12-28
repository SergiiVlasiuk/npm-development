// import * as sinon from 'sinon'
// import sinon from 'sinon'
// import * as tsSinon from 'ts-sinon'
// RxJS v6+
import { first, take } from 'rxjs/operators'
import { throttleTimeExample } from './index'

describe('[throttleTime] monitor function work result.', () => {
  // let clock

  beforeEach(() => {
    // console.log('sinon.useFakeTimers(): ', sinon.useFakeTimers())
    // clock = sinon.useFakeTimers()
  })

  // afterEach(() => {
  //   clock.restore()
  // })

  test('the expectation is to receive first data item from the thread ignoring redundant publications', () => {
    // const spy = jest.fn()
    const expectedValues = [0, 5, 10]
    let index = 0
    throttleTimeExample(10, 49)
      .pipe(first())
      .subscribe((data) => expect(data).toBe(expectedValues[index++]))
  })

  test('the expectation is to receive 3 first data items from the thread ignoring redundant rest', () => {
    const expectedValues = [0, 5, 10]
    let index = 0
    throttleTimeExample(10, 47)
      .pipe(take(3))
      .subscribe((data) => {
        expect(data).toBe(expectedValues[index++])
      })
  })
})
