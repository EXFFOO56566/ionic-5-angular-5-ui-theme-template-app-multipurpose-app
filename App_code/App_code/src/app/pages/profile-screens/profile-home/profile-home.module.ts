import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileHomePageRoutingModule } from './profile-home-routing.module';

import { ProfileHomePage } from './profile-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileHomePageRoutingModule
  ],
  declarations: [ProfileHomePage]
})
export class ProfileHomePageModule {}
