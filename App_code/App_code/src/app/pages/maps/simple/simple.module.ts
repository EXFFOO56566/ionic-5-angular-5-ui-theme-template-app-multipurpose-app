import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimplePageRoutingModule } from './simple-routing.module';

import { SimplePage } from './simple.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimplePageRoutingModule
  ],
  declarations: [SimplePage]
})
export class SimplePageModule {}
