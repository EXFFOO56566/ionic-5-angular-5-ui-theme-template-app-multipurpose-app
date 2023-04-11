import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Forms2PageRoutingModule } from './forms2-routing.module';

import { Forms2Page } from './forms2.page';
import { IonicRatingModule } from "ionic4-rating";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Forms2PageRoutingModule,
    IonicRatingModule
  ],
  declarations: [Forms2Page]
})
export class Forms2PageModule { }
