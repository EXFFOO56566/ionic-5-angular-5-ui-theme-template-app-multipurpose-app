import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEx1PageRoutingModule } from './register-ex1-routing.module';

import { RegisterEx1Page } from './register-ex1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEx1PageRoutingModule
  ],
  declarations: [RegisterEx1Page]
})
export class RegisterEx1PageModule {}
