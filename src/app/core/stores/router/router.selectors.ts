import { Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RouterState } from './router-state';

export interface RouterStateSelectors<V> {
  selectQueryParams: (state: V) => Params;
  selectQueryParam: (param: string) => (state: V) => string | undefined;
  selectRouteParams: (state: V) => Params;
  selectRouteParam: (param: string) => (state: V) => string | undefined;
  selectRouteFragment: (state: V) => string | null;
  selectUrl: (state: V) => string;
  selectRouteData: <D = any>(state: V) => D;
}

/**
 * Simplify the ability to get url, params, query params, fragment from router state
 * RouterStateUrl and corresponding RouterStateSerializer from this library should be also used with those selectors
 *
 * Usage:
 *     Reducer:
 *         const routerState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');
 *         export const { selectRouteParam } = getSelectors(routerState);
 *
 *    Elsewhere:
 *        this.store.pipe(select(selectRouteParam('id')))
 */
export const getSelectors = <V, W extends RouterState>(
  selectState: (state: V) => RouterReducerState<W>
): RouterStateSelectors<V> => {
  const selectRouterState = createSelector(
    selectState,
    (router) => router && router.state
  );
  const selectQueryParams = createSelector(
    selectRouterState,
    (route) => route && route.queryParams
  );
  const selectQueryParam = (param: string) =>
    createSelector(selectQueryParams, (params) => params && params[param]);
  const selectRouteParams = createSelector(
    selectRouterState,
    (route) => route && route.params
  );
  const selectRouteParam = (param: string) =>
    createSelector(selectRouteParams, (params) => params && params[param]);
  const selectRouteFragment = createSelector(
    selectRouterState,
    (route) => route && route.fragment
  );
  const selectUrl = createSelector(
    selectRouterState,
    (routerState) => routerState && routerState.url
  );
  const selectRouteData = createSelector(
    selectRouterState,
    (routerState) => routerState && routerState.data
  );

  return {
    selectQueryParams,
    selectQueryParam,
    selectRouteParams,
    selectRouteParam,
    selectRouteFragment,
    selectUrl,
    selectRouteData,
  };
};

const routerState =
  createFeatureSelector<fromRouter.RouterReducerState<RouterState>>('router');
export const { selectRouteData, selectQueryParam, selectUrl } =
  getSelectors(routerState);
