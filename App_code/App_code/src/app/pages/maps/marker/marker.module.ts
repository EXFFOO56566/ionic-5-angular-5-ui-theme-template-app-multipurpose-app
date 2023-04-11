import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarkerPageRoutingModule } from './marker-routing.module';

import { MarkerPage } from './marker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkerPageRoutingModule
  ],
  declarations: [MarkerPage]
})
export class MarkerPageModule {}
