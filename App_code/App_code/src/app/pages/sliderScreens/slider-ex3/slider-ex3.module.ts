import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderEx3PageRoutingModule } from './slider-ex3-routing.module';

import { SliderEx3Page } from './slider-ex3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderEx3PageRoutingModule
  ],
  declarations: [SliderEx3Page]
})
export class SliderEx3PageModule {}
