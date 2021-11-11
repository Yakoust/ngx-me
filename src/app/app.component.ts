import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {theme = 'light';

ngOnInit(): void {
  this.setTheme(localStorage.getItem('theme') || 'light');
}

constructor(@Inject(DOCUMENT) private document: Document) {}

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
