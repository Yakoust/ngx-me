import { MemoizedSelector } from '@ngrx/store';

import * as routerSelectors from './router.selectors';

describe('Router selectors', () => {
  it('should get data', () => {
    expect((routerSelectors.selectRouteData as MemoizedSelector<unknown, unknown>).projector({ data: true })).toBe(true);
  });
});
