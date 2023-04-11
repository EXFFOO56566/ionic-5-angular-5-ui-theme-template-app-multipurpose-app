import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEx5PageRoutingModule } from './login-ex5-routing.module';

import { LoginEx5Page } from './login-ex5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginEx5PageRoutingModule
  ],
  declarations: [LoginEx5Page]
})
export class LoginEx5PageModule {}
