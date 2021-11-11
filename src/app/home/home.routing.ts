import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeResolver } from './core/home.resolver';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: '',
    resolve: { content: HomeResolver },
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
