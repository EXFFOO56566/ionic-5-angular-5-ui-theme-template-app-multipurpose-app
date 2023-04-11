import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderHomePageRoutingModule } from './slider-home-routing.module';

import { SliderHomePage } from './slider-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderHomePageRoutingModule
  ],
  declarations: [SliderHomePage]
})
export class SliderHomePageModule {}
