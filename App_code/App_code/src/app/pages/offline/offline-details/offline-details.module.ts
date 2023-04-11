import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfflineDetailsPageRoutingModule } from './offline-details-routing.module';

import { OfflineDetailsPage } from './offline-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfflineDetailsPageRoutingModule
  ],
  declarations: [OfflineDetailsPage]
})
export class OfflineDetailsPageModule {}
