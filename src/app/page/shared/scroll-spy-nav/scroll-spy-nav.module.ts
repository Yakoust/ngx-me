import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScrollSpyNavComponent } from './scroll-spy-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ScrollSpyNavComponent],
  exports: [ScrollSpyNavComponent],
})
export class ScrollSpyNavModule {}
