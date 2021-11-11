import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesResolver } from './core/pages.resolver';
import { PagesComponent } from './pages.component';

export const routes: Routes = [
  {
    path: '',
    resolve: { content: PagesResolver },
    component: PagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
