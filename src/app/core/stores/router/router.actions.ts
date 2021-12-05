import { NavigationExtras } from '@angular/router';
import { createAction, props } from '@ngrx/store';

export const navigate = createAction(
  '[Router] Navigate',
  props<{ commands: any[]; extras?: NavigationExtras }>()
);
