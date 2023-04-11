import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FireImageDetailPageRoutingModule } from './fire-image-detail-routing.module';

import { FireImageDetailPage } from './fire-image-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FireImageDetailPageRoutingModule
  ],
  declarations: [FireImageDetailPage]
})
export class FireImageDetailPageModule {}
