import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimationsPageRoutingModule } from './animations-routing.module';

import { AnimationsPage } from './animations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimationsPageRoutingModule
  ],
  declarations: [AnimationsPage]
})
export class AnimationsPageModule {}
