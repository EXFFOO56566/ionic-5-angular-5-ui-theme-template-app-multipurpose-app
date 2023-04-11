import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestLoginPageRoutingModule } from './rest-login-routing.module';

import { RestLoginPage } from './rest-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestLoginPageRoutingModule
  ],
  declarations: [RestLoginPage]
})
export class RestLoginPageModule {}
