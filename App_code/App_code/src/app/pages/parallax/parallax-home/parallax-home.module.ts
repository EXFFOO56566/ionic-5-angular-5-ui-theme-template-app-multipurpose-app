import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParallaxHomePageRoutingModule } from './parallax-home-routing.module';

import { ParallaxHomePage } from './parallax-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParallaxHomePageRoutingModule
  ],
  declarations: [ParallaxHomePage]
})
export class ParallaxHomePageModule {}
