import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [PagesComponent],
    imports: [CommonModule, PagesRoutingModule, MatCardModule],
})
export class PagesModule {}
