import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FireImageListPageRoutingModule } from './fire-image-list-routing.module';

import { FireImageListPage } from './fire-image-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FireImageListPageRoutingModule
  ],
  declarations: [FireImageListPage]
})
export class FireImageListPageModule {}
