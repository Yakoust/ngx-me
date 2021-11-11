import { Params } from "@angular/router";
import { BaseRouterStoreState } from "@ngrx/router-store";

export interface RouterState<D = any> extends BaseRouterStoreState {
  params: Params;
  queryParams: Params;
  fragment: string | null;
  data: D;
}
