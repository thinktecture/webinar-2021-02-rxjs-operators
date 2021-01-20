import { interval, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const source$ = interval(1000).pipe(
  // take(1),
  tap(v => {
    console.log(`(interval: ${v})`);
  }),
);

function double(source: Observable<number>): Observable<number> {
  return new Observable(observer => {
    return source.subscribe({
      next: v => observer.next(v * 2),
      error: e => observer.error(e),
      complete: () => observer.complete(),
    });
  });
}

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

