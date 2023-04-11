import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Forms3PageRoutingModule } from './forms3-routing.module';

import { Forms3Page } from './forms3.page';
import { IonicRatingModule } from "ionic4-rating";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Forms3PageRoutingModule,
    IonicRatingModule
  ],
  declarations: [Forms3Page]
})
export class Forms3PageModule { }
