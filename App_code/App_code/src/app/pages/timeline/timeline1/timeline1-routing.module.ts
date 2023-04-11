import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Timeline1Page } from './timeline1.page';

const routes: Routes = [
  {
    path: '',
    component: Timeline1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Timeline1PageRoutingModule {}
