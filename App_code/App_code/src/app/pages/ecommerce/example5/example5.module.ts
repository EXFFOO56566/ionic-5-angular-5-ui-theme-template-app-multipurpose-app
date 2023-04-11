import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example5PageRoutingModule } from './example5-routing.module';

import { Example5Page } from './example5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example5PageRoutingModule
  ],
  declarations: [Example5Page]
})
export class Example5PageModule {}
