import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartsPageRoutingModule } from './charts-routing.module';

import { ChartsPage } from './charts.page';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsPageRoutingModule,
    ChartsModule
  ],
  declarations: [ChartsPage]
})
export class ChartsPageModule { }
