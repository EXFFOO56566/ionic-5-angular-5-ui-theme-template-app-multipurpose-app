import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridHomePageRoutingModule } from './grid-home-routing.module';

import { GridHomePage } from './grid-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridHomePageRoutingModule
  ],
  declarations: [GridHomePage]
})
export class GridHomePageModule {}
