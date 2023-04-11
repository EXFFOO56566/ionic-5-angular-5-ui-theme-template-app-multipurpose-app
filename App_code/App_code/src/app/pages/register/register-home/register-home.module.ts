import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterHomePageRoutingModule } from './register-home-routing.module';

import { RegisterHomePage } from './register-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterHomePageRoutingModule
  ],
  declarations: [RegisterHomePage]
})
export class RegisterHomePageModule {}
