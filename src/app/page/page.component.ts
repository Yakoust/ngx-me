import { Component, ElementRef, HostListener } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PageMeta } from '../shared/page-meta';
import { RouteName } from '../shared/routes/route-name';
import { ZOOM_ANIMATION } from './shared/zoom.animation';
import * as routerSelectors from '../core/stores/router/router.selectors'

@Component({
  animations: [ZOOM_ANIMATION],
  selector: 'wff-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  headings: Element[] | null = null;
  page$: Observable<PageMeta> = this.store.pipe(
    select(routerSelectors.selectRouteData),
    map(({ content }) => content)
  );
  RouteName = RouteName;
  constructor(private store: Store, private elementRef: ElementRef<HTMLElement>) {}

  showScrollUpButton = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showScrollUpButton = Math.ceil(window.pageYOffset) > 64;
  }

  onScrollUp(): void {
    window.scrollTo(0, 0);
    location.hash = '';
  }

  onLoad(): void {
    this.setHeadings();
  }

  private setHeadings(): void {
    const headings: Element[] = [];
    this.elementRef.nativeElement.querySelectorAll('h2').forEach((x) => headings.push(x));
    this.headings = headings;
  }
}
