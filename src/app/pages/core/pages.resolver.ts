import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PageMeta } from 'src/app/shared/page-meta';
import { PagesService } from 'src/app/shared/service/pages.service';

import { RouteName } from '../../shared/routes/route-name';

@Injectable({
  providedIn: 'root',
})
export class PagesResolver implements Resolve<PageMeta[]> {
  constructor(private pagesService: PagesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PageMeta[]> {
    const segments = route.parent?.url.map((segment) => segment.path);
    const path = segments ? segments[segments.length - 1] : undefined;
    switch (path) {
      case RouteName.Category:
        return this.pagesService.getAllPagesByCategory(
          route.queryParamMap.get('q') ?? ''
        );
      case RouteName.Tag:
        return this.pagesService.getAllPagesByTag(
          route.queryParamMap.get('q') ?? ''
        );
      default:
        return of([]);
    }
  }
}
