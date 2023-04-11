import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridEx6PageRoutingModule } from './grid-ex6-routing.module';

import { GridEx6Page } from './grid-ex6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridEx6PageRoutingModule
  ],
  declarations: [GridEx6Page]
})
export class GridEx6PageModule {}
