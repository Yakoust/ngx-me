import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule, MatCardModule],
})
export class PagesModule {}
