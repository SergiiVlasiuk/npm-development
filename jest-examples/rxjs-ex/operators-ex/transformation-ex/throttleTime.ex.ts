// RxJS v6+
import { interval } from 'rxjs'
import { throttleTime } from 'rxjs/operators'

/* const example = throttleTimeExample()

// output: 0...6...12
const subscribe = example.subscribe((val) => console.log(val))

setTimeout(() => {
  subscribe.unsubscribe()
}, 6000)
 */
export function throttleTimeExample(
  intervalValue: number = 1_000,
  throttlePeriod: number = 5_000
) {
  // emit value every 1 second
  const source = interval(intervalValue)
  /*
    emit the first value, then ignore for 5 seconds. repeat...
  */
  return source.pipe(throttleTime(throttlePeriod))
}
