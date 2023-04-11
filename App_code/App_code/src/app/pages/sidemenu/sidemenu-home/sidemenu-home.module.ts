import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidemenuHomePageRoutingModule } from './sidemenu-home-routing.module';

import { SidemenuHomePage } from './sidemenu-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidemenuHomePageRoutingModule
  ],
  declarations: [SidemenuHomePage]
})
export class SidemenuHomePageModule {}
