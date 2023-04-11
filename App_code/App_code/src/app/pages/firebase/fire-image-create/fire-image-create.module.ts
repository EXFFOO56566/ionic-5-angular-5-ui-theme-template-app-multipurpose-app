import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FireImageCreatePageRoutingModule } from './fire-image-create-routing.module';

import { FireImageCreatePage } from './fire-image-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FireImageCreatePageRoutingModule
  ],
  declarations: [FireImageCreatePage]
})
export class FireImageCreatePageModule {}
