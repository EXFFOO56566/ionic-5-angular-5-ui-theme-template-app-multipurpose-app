import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEx2PageRoutingModule } from './register-ex2-routing.module';

import { RegisterEx2Page } from './register-ex2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEx2PageRoutingModule
  ],
  declarations: [RegisterEx2Page]
})
export class RegisterEx2PageModule {}
