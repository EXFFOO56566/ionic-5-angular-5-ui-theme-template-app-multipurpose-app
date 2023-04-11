import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfflineCreatePageRoutingModule } from './offline-create-routing.module';

import { OfflineCreatePage } from './offline-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfflineCreatePageRoutingModule
  ],
  declarations: [OfflineCreatePage]
})
export class OfflineCreatePageModule {}
