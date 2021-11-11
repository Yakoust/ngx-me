import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteName } from './shared/routes/route-name';

const routes: Routes = [
  { path: '', redirectTo: `/${RouteName.Home}`, pathMatch: 'full' },
  {
    path: RouteName.Home,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: RouteName.Page,
    loadChildren: () => import('./page/page.module').then((m) => m.PageModule),
  },
  {
    path: RouteName.Tag,
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: RouteName.Category,
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: RouteName.Keyword,
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
