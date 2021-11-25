import * as breakpointActions from './breakpoint.actions';
import {createEffect} from "@ngrx/effects";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";

@Injectable()
export class BreakpointEffects {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isDesktop$ = createEffect(() =>
    this.breakpointObserver.observe([`screen and (min-width: 768px)`]).pipe(map(({matches}) => breakpointActions.updateIsDesktop({isDesktop: matches})))
  );
}
