import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Payment3PageRoutingModule } from './payment3-routing.module';

import { Payment3Page } from './payment3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Payment3PageRoutingModule
  ],
  declarations: [Payment3Page]
})
export class Payment3PageModule {}
