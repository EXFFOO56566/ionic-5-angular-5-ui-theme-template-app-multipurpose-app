import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Payment1PageRoutingModule } from './payment1-routing.module';

import { Payment1Page } from './payment1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Payment1PageRoutingModule
  ],
  declarations: [Payment1Page]
})
export class Payment1PageModule {}
