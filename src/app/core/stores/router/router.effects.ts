import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { navigate } from './router.actions';

@Injectable()
export class RouterEffects {
  public navigate$: Observable<any> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(navigate),
        concatMap(({ commands, extras }) => from(this.ngZone.run(() => this.router.navigate(commands, extras))))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router, private ngZone: NgZone) {}
}
