import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestImageListPageRoutingModule } from './rest-image-list-routing.module';

import { RestImageListPage } from './rest-image-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestImageListPageRoutingModule
  ],
  declarations: [RestImageListPage]
})
export class RestImageListPageModule {}
