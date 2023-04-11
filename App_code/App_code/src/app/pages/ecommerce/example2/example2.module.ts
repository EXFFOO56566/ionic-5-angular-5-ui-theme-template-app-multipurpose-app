import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example2PageRoutingModule } from './example2-routing.module';

import { Example2Page } from './example2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example2PageRoutingModule
  ],
  declarations: [Example2Page]
})
export class Example2PageModule {}
