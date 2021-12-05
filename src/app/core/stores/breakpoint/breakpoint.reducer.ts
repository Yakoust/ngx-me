import { createReducer, on } from '@ngrx/store';

import * as breakpointActions from './breakpoint.actions';
import { State } from './breakpoint.state';

export const featureKey = 'breakpoint';

const initialState: State = {
  isDesktop: false,
};

export const reducer = createReducer(
  initialState,
  on(
    breakpointActions.updateIsDesktop,
    (state: State, { isDesktop }): State => ({ ...state, isDesktop })
  )
);
