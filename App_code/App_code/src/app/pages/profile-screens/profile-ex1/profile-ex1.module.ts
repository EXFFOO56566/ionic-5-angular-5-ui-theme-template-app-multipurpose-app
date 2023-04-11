import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEx1PageRoutingModule } from './profile-ex1-routing.module';

import { ProfileEx1Page } from './profile-ex1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEx1PageRoutingModule
  ],
  declarations: [ProfileEx1Page]
})
export class ProfileEx1PageModule {}
