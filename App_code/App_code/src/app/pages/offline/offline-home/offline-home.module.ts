import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfflineHomePageRoutingModule } from './offline-home-routing.module';

import { OfflineHomePage } from './offline-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfflineHomePageRoutingModule
  ],
  declarations: [OfflineHomePage]
})
export class OfflineHomePageModule {}
