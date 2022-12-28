import { Observable, of } from 'rxjs'
import { delay, map } from 'rxjs/operators'

export function reverseWords(x: string): Observable<string> {
  return of(x).pipe(
    map((x) => x.split(' ')),
    map((x) => x.reverse()),
    map((x) => x.join(' ')),
    delay(10)
  )
}
