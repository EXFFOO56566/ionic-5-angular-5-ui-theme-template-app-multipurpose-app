import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestImageDetailsPageRoutingModule } from './rest-image-details-routing.module';

import { RestImageDetailsPage } from './rest-image-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestImageDetailsPageRoutingModule
  ],
  declarations: [RestImageDetailsPage]
})
export class RestImageDetailsPageModule {}
