import { createAction, props } from '@ngrx/store';

export const updateIsDesktop = createAction(
  '[Breakpoint] Update is desktop',
  props<{ isDesktop: boolean }>()
);
