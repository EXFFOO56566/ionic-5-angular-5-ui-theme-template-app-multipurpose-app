import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Forms1PageRoutingModule } from './forms1-routing.module';

import { Forms1Page } from './forms1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Forms1PageRoutingModule
  ],
  declarations: [Forms1Page]
})
export class Forms1PageModule {}
