import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignaturePadPageRoutingModule } from './signature-pad-routing.module';

import { SignaturePadPage } from './signature-pad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignaturePadPageRoutingModule
  ],
  declarations: [SignaturePadPage]
})
export class SignaturePadPageModule {}
