import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { PageMeta } from 'src/app/shared/page-meta';

import { RouteName } from '../../../shared/routes/route-name';
import { ZOOM_ANIMATION } from '../zoom.animation';

@Component({
  animations: [ZOOM_ANIMATION],
  selector: 'wff-scrollspy-nav-layout',
  templateUrl: './scroll-spy-nav-layout.component.html',
  styleUrls: ['./scroll-spy-nav-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollSpyNavLayoutComponent {
  @Input()
  headings: Element[] | null = null;

  @Input()
  page: PageMeta | null = null;

  showScrollUpButton = false;
  RouteName = RouteName;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showScrollUpButton = Math.ceil(window.pageYOffset) > 64;
  }

  onScrollUp(): void {
    window.scrollTo(0, 0);
    location.hash = '';
  }
}
