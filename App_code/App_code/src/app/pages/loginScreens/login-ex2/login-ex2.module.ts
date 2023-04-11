import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEx2PageRoutingModule } from './login-ex2-routing.module';

import { LoginEx2Page } from './login-ex2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginEx2PageRoutingModule
  ],
  declarations: [LoginEx2Page]
})
export class LoginEx2PageModule {}
