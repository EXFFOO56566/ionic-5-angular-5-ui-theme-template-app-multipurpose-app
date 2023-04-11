import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginHomePageRoutingModule } from './login-home-routing.module';

import { LoginHomePage } from './login-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginHomePageRoutingModule
  ],
  declarations: [LoginHomePage]
})
export class LoginHomePageModule {}
