import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEx2PageRoutingModule } from './profile-ex2-routing.module';

import { ProfileEx2Page } from './profile-ex2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEx2PageRoutingModule
  ],
  declarations: [ProfileEx2Page]
})
export class ProfileEx2PageModule {}
