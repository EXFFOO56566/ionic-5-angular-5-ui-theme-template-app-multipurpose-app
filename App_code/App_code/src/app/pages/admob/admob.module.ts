import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmobPageRoutingModule } from './admob-routing.module';

import { AdmobPage } from './admob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmobPageRoutingModule
  ],
  declarations: [AdmobPage]
})
export class AdmobPageModule {}
