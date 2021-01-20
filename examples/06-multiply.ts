import { interval, Observable, OperatorFunction } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const source$ = interval(1000).pipe(
  // take(1),
  tap(v => {
    console.log(`(interval: ${v})`);
  }),
);

function multiply(by: number): OperatorFunction<number, number> {
  return source => {
    return new Observable(observer => {
      return source.subscribe({
        next: v => observer.next(v * by),
        error: e => observer.error(e),
        complete: () => observer.complete(),
      });
    });
  };
}

const double = multiply(2);

source$
  .pipe(
    double,
    // take(3),
  )
  .subscribe({
    next: (value) => console.log('next', value),
    error: ({ message }) => console.warn(`error: ${message}`),
    complete: () => console.log('completed'),
  });
