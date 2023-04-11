import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEx3PageRoutingModule } from './login-ex3-routing.module';

import { LoginEx3Page } from './login-ex3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginEx3PageRoutingModule
  ],
  declarations: [LoginEx3Page]
})
export class LoginEx3PageModule {}
