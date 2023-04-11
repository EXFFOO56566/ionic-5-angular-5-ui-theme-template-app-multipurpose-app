import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Timeline4PageRoutingModule } from './timeline4-routing.module';

import { Timeline4Page } from './timeline4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Timeline4PageRoutingModule
  ],
  declarations: [Timeline4Page]
})
export class Timeline4PageModule {}
