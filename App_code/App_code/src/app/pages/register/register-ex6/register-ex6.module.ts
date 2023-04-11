import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEx6PageRoutingModule } from './register-ex6-routing.module';

import { RegisterEx6Page } from './register-ex6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEx6PageRoutingModule
  ],
  declarations: [RegisterEx6Page]
})
export class RegisterEx6PageModule {}
