import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

import { RouterState } from './router-state';

const urlParsingRegex = new RegExp('[?#]');

function serialize(
  routerState: RouterStateSnapshot,
  isUrlSanitized: boolean
): RouterState {
  let route = routerState.root;
  while (route.firstChild) {
    route = route.firstChild;
  }
  const {
    url,
    root: { queryParams },
  } = routerState;
  const { params, fragment, data } = route;
  if (isUrlSanitized) {
    return {
      url: url.split(urlParsingRegex)[0],
      params,
      queryParams,
      fragment,
      data,
    };
  }
  return { url, params, queryParams, fragment, data };
}

export class RouterSerializer implements RouterStateSerializer<RouterState> {
  serialize(routerState: RouterStateSnapshot): RouterState {
    return serialize(routerState, true);
  }
}

export class RouterSerializerWithoutSanitizedUrl
  implements RouterStateSerializer<RouterState>
{
  serialize(routerState: RouterStateSnapshot): RouterState {
    return serialize(routerState, false);
  }
}
