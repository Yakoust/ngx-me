import { DOCUMENT, KeyValue } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { PageMeta } from './shared/page-meta';
import { PagesService } from './shared/service/pages.service';
import { RouteName } from './shared/routes/route-name';

@Component({
  selector: 'ngxme-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent implements OnInit {
  theme = 'light';
  RouteName = RouteName;
  navigation$: Observable<{key: string; value: PageMeta[]}[]> = this.pagesService.getNavigation();

  ngOnInit(): void {
    this.setTheme(localStorage.getItem('theme') || 'light')
  }

  constructor(@Inject(DOCUMENT) private document: Document, private store: Store, private pagesService: PagesService) {

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
