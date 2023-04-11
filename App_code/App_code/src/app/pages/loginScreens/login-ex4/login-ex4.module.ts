import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEx4PageRoutingModule } from './login-ex4-routing.module';

import { LoginEx4Page } from './login-ex4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginEx4PageRoutingModule
  ],
  declarations: [LoginEx4Page]
})
export class LoginEx4PageModule {}
