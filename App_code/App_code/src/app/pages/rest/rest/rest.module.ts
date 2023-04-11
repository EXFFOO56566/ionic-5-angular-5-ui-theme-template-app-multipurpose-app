import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestPageRoutingModule } from './rest-routing.module';

import { RestPage } from './rest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestPageRoutingModule
  ],
  declarations: [RestPage]
})
export class RestPageModule {}
