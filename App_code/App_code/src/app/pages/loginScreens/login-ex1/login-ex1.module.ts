import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEx1PageRoutingModule } from './login-ex1-routing.module';

import { LoginEx1Page } from './login-ex1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginEx1PageRoutingModule
  ],
  declarations: [LoginEx1Page]
})
export class LoginEx1PageModule {}
