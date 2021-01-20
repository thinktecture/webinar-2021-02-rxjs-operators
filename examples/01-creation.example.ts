import { from, Observable } from 'rxjs';

// Observable constructor
const source$ = new Observable(observer => {
  observer.next('Value 1');
  observer.next('Value 2');
  observer.complete();

  return () => {
    console.log('observer unsubscribed');
  };
});

source$.subscribe(v => console.log('Received Value:', v));

// Creation operator
const source2$ = from(['Value 1', 'Value 2']);

source2$.subscribe(v => console.log('Received Value:', v));
