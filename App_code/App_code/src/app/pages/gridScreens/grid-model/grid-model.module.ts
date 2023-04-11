import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridModelPageRoutingModule } from './grid-model-routing.module';

import { GridModelPage } from './grid-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridModelPageRoutingModule
  ],
  declarations: [GridModelPage]
})
export class GridModelPageModule {}
