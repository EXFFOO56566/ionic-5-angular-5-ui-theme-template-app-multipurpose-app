import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridEx5PageRoutingModule } from './grid-ex5-routing.module';

import { GridEx5Page } from './grid-ex5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridEx5PageRoutingModule
  ],
  declarations: [GridEx5Page]
})
export class GridEx5PageModule {}
