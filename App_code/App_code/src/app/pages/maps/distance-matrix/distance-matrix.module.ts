import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistanceMatrixPageRoutingModule } from './distance-matrix-routing.module';

import { DistanceMatrixPage } from './distance-matrix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistanceMatrixPageRoutingModule
  ],
  declarations: [DistanceMatrixPage]
})
export class DistanceMatrixPageModule {}
