import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridEx2PageRoutingModule } from './grid-ex2-routing.module';

import { GridEx2Page } from './grid-ex2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridEx2PageRoutingModule
  ],
  declarations: [GridEx2Page]
})
export class GridEx2PageModule {}
