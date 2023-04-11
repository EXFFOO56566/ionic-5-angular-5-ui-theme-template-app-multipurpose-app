import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Timeline1PageRoutingModule } from './timeline1-routing.module';

import { Timeline1Page } from './timeline1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Timeline1PageRoutingModule
  ],
  declarations: [Timeline1Page]
})
export class Timeline1PageModule {}
