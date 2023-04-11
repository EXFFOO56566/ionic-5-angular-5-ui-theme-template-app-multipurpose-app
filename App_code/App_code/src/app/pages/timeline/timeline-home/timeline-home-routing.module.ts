import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineHomePage } from './timeline-home.page';

const routes: Routes = [
  {
    path: '',
    component: TimelineHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimelineHomePageRoutingModule {}
