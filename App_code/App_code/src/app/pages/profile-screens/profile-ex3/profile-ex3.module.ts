import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEx3PageRoutingModule } from './profile-ex3-routing.module';

import { ProfileEx3Page } from './profile-ex3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEx3PageRoutingModule
  ],
  declarations: [ProfileEx3Page]
})
export class ProfileEx3PageModule {}
