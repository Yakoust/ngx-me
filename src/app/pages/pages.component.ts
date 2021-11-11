import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PageMeta } from '../shared/page-meta';
import { RouteName } from '../shared/routes/route-name';
import * as routerSelectors from '../core/stores/router/router.selectors'

@Component({
  selector: 'wff-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  constructor(private store: Store) {}
  pages$: Observable<PageMeta[]> = this.store.pipe(
    select(routerSelectors.selectRouteData),
    map(({ content }) => content)
  );
  route$: Observable<RouteName> = this.store.pipe(
    select(routerSelectors.selectUrl),
    map((fragment) => fragment.slice(1) as RouteName)
  );
  param$: Observable<string | undefined> = this.store.pipe(select(routerSelectors.selectQueryParam('q')));
}
