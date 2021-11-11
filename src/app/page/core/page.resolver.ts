import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PageMeta } from 'src/app/shared/page-meta';
import { PagesService } from 'src/app/shared/service/pages.service';

@Injectable({
  providedIn: 'root',
})
export class PageResolver implements Resolve<PageMeta | undefined> {
  constructor(private pagesService: PagesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PageMeta | undefined> {
    return this.pagesService.getPageByPath(route.paramMap.get('pageId') ?? '');
  }
}
