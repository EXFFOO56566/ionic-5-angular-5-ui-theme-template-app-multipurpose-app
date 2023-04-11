import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputMaskPageRoutingModule } from './input-mask-routing.module';

import { InputMaskPage } from './input-mask.page';

//https://www.npmjs.com/package/ngx-mask
import { NgxMaskModule, IConfig } from 'ngx-mask';
// var options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputMaskPageRoutingModule,
    NgxMaskModule.forRoot()

  ],
  declarations: [InputMaskPage]
})
export class InputMaskPageModule { }
