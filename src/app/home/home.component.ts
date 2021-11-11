import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as routerSelectors from '../core/stores/router/router.selectors';
import { PageMeta } from '../shared/page-meta';

@Component({
  selector: 'wff-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private store: Store) {}
  pages$: Observable<{ [id: string]: PageMeta[] }> = this.store.pipe(
    select(routerSelectors.selectRouteData),
    map(({ content }) => this.groupPageMetaByCategory(content))
  );
  groupPageMetaByCategory(links: PageMeta[]): { [id: string]: PageMeta[] } {
    return links.reduce(
      (acc: { [id: string]: PageMeta[] }, curr: PageMeta) => ({
        ...acc,
        [curr.category]: [...(acc[curr.category] || []), curr],
      }),
      {}
    );
  }
}
