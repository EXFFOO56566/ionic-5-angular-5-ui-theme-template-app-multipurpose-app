import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEx4PageRoutingModule } from './profile-ex4-routing.module';

import { ProfileEx4Page } from './profile-ex4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEx4PageRoutingModule
  ],
  declarations: [ProfileEx4Page]
})
export class ProfileEx4PageModule {}
