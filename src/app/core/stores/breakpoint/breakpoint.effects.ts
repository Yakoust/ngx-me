import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import * as breakpointActions from './breakpoint.actions';

@Injectable()
export class BreakpointEffects {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isDesktop$ = createEffect(() =>
    this.breakpointObserver
      .observe([`screen and (min-width: 768px)`])
      .pipe(
        map(({ matches }) =>
          breakpointActions.updateIsDesktop({ isDesktop: matches })
        )
      )
  );
}
