import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignaturePickerPageRoutingModule } from './signature-picker-routing.module';

import { SignaturePickerPage } from './signature-picker.page';
import { SignaturePadModule } from 'angular2-signaturepad';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignaturePickerPageRoutingModule,
    SignaturePadModule
  ],
  declarations: [SignaturePickerPage]
})
export class SignaturePickerPageModule { }
