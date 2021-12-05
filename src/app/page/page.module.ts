import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { PageComponent } from './page.component';
import { PageeRoutingModule } from './page.routing';
import { ScrollSpyNavLayoutModule } from './shared/scroll-spy-nav-layout/scroll-spy-nav-layout.module';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    PageeRoutingModule,
    MarkdownModule.forChild(),
    ScrollSpyNavLayoutModule,
  ],
})
export class PageModule {}
