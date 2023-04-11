import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEx3PageRoutingModule } from './register-ex3-routing.module';

import { RegisterEx3Page } from './register-ex3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEx3PageRoutingModule
  ],
  declarations: [RegisterEx3Page]
})
export class RegisterEx3PageModule {}
