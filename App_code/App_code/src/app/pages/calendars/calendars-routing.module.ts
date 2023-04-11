import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarsPage } from './calendars.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarsPageRoutingModule {}
