import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestRegisterPageRoutingModule } from './rest-register-routing.module';

import { RestRegisterPage } from './rest-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestRegisterPageRoutingModule
  ],
  declarations: [RestRegisterPage]
})
export class RestRegisterPageModule {}
