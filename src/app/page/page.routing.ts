import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageResolver } from './core/page.resolver';
import { PageComponent } from './page.component';

export const routes: Routes = [
  {
    path: ':pageId',
    resolve: { content: PageResolver },
    component: PageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageeRoutingModule {}
