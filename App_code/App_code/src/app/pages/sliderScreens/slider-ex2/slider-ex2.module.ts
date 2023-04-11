import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderEx2PageRoutingModule } from './slider-ex2-routing.module';

import { SliderEx2Page } from './slider-ex2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderEx2PageRoutingModule
  ],
  declarations: [SliderEx2Page]
})
export class SliderEx2PageModule {}
