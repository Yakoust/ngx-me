import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { PageMeta } from 'src/app/shared/page-meta';

import { RouteName } from '../../../shared/routes/route-name';
import { ZOOM_ANIMATION } from '../zoom.animation';

@Component({
  animations: [ZOOM_ANIMATION],
  selector: 'ngxme-scrollspy-nav-layout',
  templateUrl: './scroll-spy-nav-layout.component.html',
  styleUrls: ['./scroll-spy-nav-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollSpyNavLayoutComponent {
  @Input()
  headings: Element[] | null = null;

  @Input()
  page: PageMeta | null = null;

  @Input()
  displaySummary = false;

  @Input()
  displayLinks = false;

  @Input()
  displayMode: 'side' | 'popup' = 'side';

  showScrollUpButton = false;
  RouteName = RouteName;
  isOpen = false;

  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    console.log('hey')
    this.showScrollUpButton = Math.ceil(window.scrollY) > 64;
  }

  onScrollUp(): void {
    window.scrollTo(0, 0);
    location.hash = '';
  }
}
