import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { PageMeta } from '../page-meta';
import { pagesMetas } from '../pages-metas';

@Injectable({ providedIn: 'root' })
export class PagesService {
  pagesMetas$: Observable<PageMeta[]> = of(pagesMetas);

  getPageByPath(path: string): Observable<PageMeta | undefined> {
    return this.pagesMetas$.pipe(map((a) => a.find((meta) => meta.path === path)));
  }
  getAllPagesByCategory(category: string, partial = false): Observable<PageMeta[]> {
    return this.pagesMetas$.pipe(
      map((a) =>
        a.filter((meta) =>
          partial ? meta.category.toLowerCase().includes(category.toLowerCase()) : meta.category.toLowerCase() === category.toLowerCase()
        )
      )
    );
  }
  getAllPagesByTag(tag: string, partial = false): Observable<PageMeta[]> {
    return this.pagesMetas$.pipe(
      map((a) =>
        a.filter((meta) =>
          meta.tags.some((t: string) => (partial ? t.toLowerCase().includes(tag.toLowerCase()) : t.toLowerCase() === tag.toLowerCase()))
        )
      )
    );
  }
  getAllPagesByKeywords(keyword: string, partial = false): Observable<PageMeta[]> {
    return this.pagesMetas$.pipe(
      map((a) =>
        a.filter((meta) =>
          meta.keywords.some((t) => (partial ? t.toLowerCase().includes(keyword.toLowerCase()) : t.toLowerCase() === keyword.toLowerCase()))
        )
      )
    );
  }
}
