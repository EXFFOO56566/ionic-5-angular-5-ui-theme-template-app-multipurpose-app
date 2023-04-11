import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridEx4PageRoutingModule } from './grid-ex4-routing.module';

import { GridEx4Page } from './grid-ex4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridEx4PageRoutingModule
  ],
  declarations: [GridEx4Page]
})
export class GridEx4PageModule {}
