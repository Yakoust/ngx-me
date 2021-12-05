import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { RouterState } from './core/stores/router/router-state';

export interface State {
  router: fromRouter.RouterReducerState<RouterState>;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
};
