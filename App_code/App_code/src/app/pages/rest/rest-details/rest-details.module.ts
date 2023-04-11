import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestDetailsPageRoutingModule } from './rest-details-routing.module';

import { RestDetailsPage } from './rest-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestDetailsPageRoutingModule
  ],
  declarations: [RestDetailsPage]
})
export class RestDetailsPageModule {}
