import { concat, from, throwError } from 'rxjs';

const source$ = concat(
  from([10, 20, 30]),
  // throwError('This is an error message!'), // x
  from([40, 50, 60]),
);

source$.subscribe({
  next: v => console.log('next:', v),
  error: err => console.log('error:', err),
  complete: () => console.log('complete!'),
});
