import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example3PageRoutingModule } from './example3-routing.module';

import { Example3Page } from './example3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example3PageRoutingModule
  ],
  declarations: [Example3Page]
})
export class Example3PageModule {}
