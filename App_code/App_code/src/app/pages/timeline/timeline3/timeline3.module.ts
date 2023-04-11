import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Timeline3PageRoutingModule } from './timeline3-routing.module';

import { Timeline3Page } from './timeline3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Timeline3PageRoutingModule
  ],
  declarations: [Timeline3Page]
})
export class Timeline3PageModule {}
