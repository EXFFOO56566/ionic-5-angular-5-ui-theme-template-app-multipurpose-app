import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestImageCreatePageRoutingModule } from './rest-image-create-routing.module';

import { RestImageCreatePage } from './rest-image-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestImageCreatePageRoutingModule
  ],
  declarations: [RestImageCreatePage]
})
export class RestImageCreatePageModule {}
