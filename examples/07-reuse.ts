import { interval, Observable, OperatorFunction } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

// Observable constructor
const source$ = interval(1000).pipe(tap(v => console.log(`(interval: ${v})`)));

function multiply(by: number): OperatorFunction<number, number> {
  return (source) => source.pipe(map(value => value * by));
  // return map(value => value * by);
}

const double = multiply(2);

source$.pipe(double).subscribe({
  next: console.log,
  error: console.warn,
  complete: () => console.log('completed'),
});


