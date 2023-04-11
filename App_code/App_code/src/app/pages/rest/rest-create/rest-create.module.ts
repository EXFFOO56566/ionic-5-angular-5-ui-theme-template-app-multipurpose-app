import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestCreatePageRoutingModule } from './rest-create-routing.module';

import { RestCreatePage } from './rest-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestCreatePageRoutingModule
  ],
  declarations: [RestCreatePage]
})
export class RestCreatePageModule {}
