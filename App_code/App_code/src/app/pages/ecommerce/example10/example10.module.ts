import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example10PageRoutingModule } from './example10-routing.module';

import { Example10Page } from './example10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example10PageRoutingModule
  ],
  declarations: [Example10Page]
})
export class Example10PageModule {}
