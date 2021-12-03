import {DOCUMENT} from '@angular/common';
import {AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {select, Store} from '@ngrx/store';
import {delay, Observable} from 'rxjs';
import {PageMeta} from './shared/page-meta';
import {PagesService} from './shared/service/pages.service';
import {RouteName} from './shared/routes/route-name';
import {MatSidenav} from '@angular/material/sidenav';
import * as breakpointSelectors from './core/stores/breakpoint/breakpoint.selectors';

@Component({
  selector: 'ngxme-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent implements OnInit, AfterViewInit {
  theme = 'light';
  RouteName = RouteName;
  navigation$: Observable<{key: string; value: PageMeta[]}[]> = this.pagesService.getNavigation();
  isDesktop$ = this.store.pipe(select(breakpointSelectors.isDesktop));

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(@Inject(DOCUMENT) private document: Document, private store: Store, private pagesService: PagesService, private observer: BreakpointObserver) {

  }

  ngOnInit(): void {
    this.setTheme(localStorage.getItem('theme') || 'light')
  }

  ngAfterViewInit() {
    this.isDesktop$.pipe(delay(1))
      .subscribe((isDesktop: boolean) => {
        if (isDesktop) {
          this.sidenav.open();
        } else {
          this.sidenav.close();
        }
      });
  }
  selectHomePage(links: PageMeta[]): PageMeta | undefined {
    return links.find(link => link.path === 'home');
  }

  toggleTheme(): void {
    this.setTheme(this.theme === 'light' ? 'dark' : 'light');
  }

  setTheme(theme: string): void {
    this.theme = theme;
    // tslint:disable-next-line:no-non-null-assertion
    const bodyClassList = this.document.querySelector('body')!.classList;
    const removeClassList = /\w*-theme\b/.exec(bodyClassList.value);
    if (removeClassList) {
      bodyClassList.remove(...removeClassList);
    }
    bodyClassList.add(`${this.theme}-theme`);
    localStorage.setItem('theme', this.theme);
  }

}
