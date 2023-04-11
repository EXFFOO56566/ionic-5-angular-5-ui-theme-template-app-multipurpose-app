import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEx5PageRoutingModule } from './register-ex5-routing.module';

import { RegisterEx5Page } from './register-ex5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEx5PageRoutingModule
  ],
  declarations: [RegisterEx5Page]
})
export class RegisterEx5PageModule {}
