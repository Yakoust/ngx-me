import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { PageMeta } from '../page-meta';
import { pagesMetas } from '../pages-metas';

@Injectable({ providedIn: 'root' })
export class PagesService {
  compareFn = (a: PageMeta, b: PageMeta) => {
    if (a.rank < b.rank) return -1;
    if (a.rank > b.rank) return 1;
    return 0;
  };

  pagesMetas$: Observable<PageMeta[]> = of(
    pagesMetas.sort((a, b) => this.compareFn(a, b))
  );

  getPageByPath(path: string): Observable<PageMeta | undefined> {
    return this.pagesMetas$.pipe(
      map((a) => a.find((meta) => meta.path === path))
    );
  }
  getAllPagesByCategory(
    category: string,
    partial = false
  ): Observable<PageMeta[]> {
    return this.pagesMetas$.pipe(
      map((a) =>
        a.filter((meta) =>
          partial
            ? meta.category.toLowerCase().includes(category.toLowerCase())
            : meta.category.toLowerCase() === category.toLowerCase()
        )
      )
    );
  }
  getNavigation(): Observable<{ key: string; value: PageMeta[] }[]> {
    return this.pagesMetas$.pipe(map((pages) => groupByCategory(pages)));
  }

  getAllPagesByTag(tag: string, partial = false): Observable<PageMeta[]> {
    return this.pagesMetas$.pipe(
      map((a) =>
        a.filter((meta) =>
          meta.tags.some((t: string) =>
            partial
              ? t.toLowerCase().includes(tag.toLowerCase())
              : t.toLowerCase() === tag.toLowerCase()
          )
        )
      )
    );
  }
}

function groupByCategory(array: PageMeta[]) {
  // Return the end result
  return array.reduce(
    (result: { key: string; value: PageMeta[] }[], currentValue: PageMeta) => {
      const page = result.find((r) => r.key === currentValue.category);
      // If an array already present for key, push it to the array. Else create an array and push the object
      if (page) {
        page.value.push(currentValue);
      } else {
        result.push({ key: currentValue.category, value: [currentValue] });
      }
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    },
    []
  ); // empty object is the initial value for result object
}
