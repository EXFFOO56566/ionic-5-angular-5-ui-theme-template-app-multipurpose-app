import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimelineHomePageRoutingModule } from './timeline-home-routing.module';

import { TimelineHomePage } from './timeline-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimelineHomePageRoutingModule
  ],
  declarations: [TimelineHomePage]
})
export class TimelineHomePageModule {}
