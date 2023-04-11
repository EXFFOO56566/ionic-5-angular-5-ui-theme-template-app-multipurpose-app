import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example1PageRoutingModule } from './example1-routing.module';

import { Example1Page } from './example1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example1PageRoutingModule
  ],
  declarations: [Example1Page]
})
export class Example1PageModule {}
