import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Timeline2PageRoutingModule } from './timeline2-routing.module';

import { Timeline2Page } from './timeline2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Timeline2PageRoutingModule
  ],
  declarations: [Timeline2Page]
})
export class Timeline2PageModule {}
