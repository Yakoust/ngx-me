import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { ScrollSpyNavModule } from '../scroll-spy-nav/scroll-spy-nav.module';
import { ScrollSpyNavLayoutComponent } from './scroll-spy-nav-layout.component';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule,
    MatButtonModule,
    ScrollSpyNavModule,
    MatIconModule,
    MatChipsModule,
    RouterModule,
    MatDividerModule,
    OverlayModule,
  ],
  declarations: [ScrollSpyNavLayoutComponent],
  exports: [ScrollSpyNavLayoutComponent],
})
export class ScrollSpyNavLayoutModule {}
