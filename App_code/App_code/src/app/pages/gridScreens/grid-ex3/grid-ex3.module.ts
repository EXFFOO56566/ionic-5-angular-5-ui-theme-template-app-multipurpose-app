import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridEx3PageRoutingModule } from './grid-ex3-routing.module';

import { GridEx3Page } from './grid-ex3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridEx3PageRoutingModule
  ],
  declarations: [GridEx3Page]
})
export class GridEx3PageModule {}
