import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Forms4PageRoutingModule } from './forms4-routing.module';

import { Forms4Page } from './forms4.page';
import { IonicRatingModule } from "ionic4-rating";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Forms4PageRoutingModule,
    IonicRatingModule
  ],
  declarations: [Forms4Page]
})
export class Forms4PageModule { }
