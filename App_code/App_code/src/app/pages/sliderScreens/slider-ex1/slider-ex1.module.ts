import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderEx1PageRoutingModule } from './slider-ex1-routing.module';

import { SliderEx1Page } from './slider-ex1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderEx1PageRoutingModule
  ],
  declarations: [SliderEx1Page]
})
export class SliderEx1PageModule {}
