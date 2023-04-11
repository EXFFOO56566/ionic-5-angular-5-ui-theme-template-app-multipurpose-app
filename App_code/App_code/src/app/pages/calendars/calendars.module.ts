import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarsPageRoutingModule } from './calendars-routing.module';

import { CalendarsPage } from './calendars.page';
import { NgCalendarModule } from 'ionic2-calendar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarsPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [CalendarsPage]
})
export class CalendarsPageModule { }
