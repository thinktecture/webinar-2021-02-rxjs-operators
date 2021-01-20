import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

const source$ = new Observable(observer => {
  observer.next('Value 1');

  let count = 2;
  const handle = setInterval(() => {
    console.log('(emitting)');
    observer.next(`Value ${count++}`);

    if (count > 5) {
      // observer.complete(); // x
      observer.error('This is an Error Message!'); // x
    }
  }, 1000);

  return () => {
    console.log('(clearing interval)');
    clearInterval(handle); // x
  };
});

source$
  // .pipe(take(3)) // x
  .subscribe({
    next: v => console.log('next:', v),
    error: err => console.log('error:', err),
    complete: () => console.log('complete!'),
  });
