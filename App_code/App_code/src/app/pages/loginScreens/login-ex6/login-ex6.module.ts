import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEx6PageRoutingModule } from './login-ex6-routing.module';

import { LoginEx6Page } from './login-ex6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginEx6PageRoutingModule
  ],
  declarations: [LoginEx6Page]
})
export class LoginEx6PageModule {}
