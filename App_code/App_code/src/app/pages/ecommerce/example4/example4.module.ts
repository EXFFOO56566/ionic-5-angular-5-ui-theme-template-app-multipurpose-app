import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example4PageRoutingModule } from './example4-routing.module';

import { Example4Page } from './example4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example4PageRoutingModule
  ],
  declarations: [Example4Page]
})
export class Example4PageModule {}
