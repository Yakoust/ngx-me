import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page.component';
import { PageResolver } from './core/page.resolver';

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
