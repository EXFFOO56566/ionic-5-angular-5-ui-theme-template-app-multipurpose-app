import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestHomePageRoutingModule } from './rest-home-routing.module';

import { RestHomePage } from './rest-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestHomePageRoutingModule
  ],
  declarations: [RestHomePage]
})
export class RestHomePageModule {}
