import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Payment2PageRoutingModule } from './payment2-routing.module';

import { Payment2Page } from './payment2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Payment2PageRoutingModule
  ],
  declarations: [Payment2Page]
})
export class Payment2PageModule {}
