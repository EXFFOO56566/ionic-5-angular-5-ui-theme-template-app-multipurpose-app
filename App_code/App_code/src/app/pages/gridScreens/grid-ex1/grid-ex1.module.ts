import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridEx1PageRoutingModule } from './grid-ex1-routing.module';

import { GridEx1Page } from './grid-ex1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridEx1PageRoutingModule
  ],
  declarations: [GridEx1Page]
})
export class GridEx1PageModule {}
