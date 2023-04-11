import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEx4PageRoutingModule } from './register-ex4-routing.module';

import { RegisterEx4Page } from './register-ex4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEx4PageRoutingModule
  ],
  declarations: [RegisterEx4Page]
})
export class RegisterEx4PageModule {}
