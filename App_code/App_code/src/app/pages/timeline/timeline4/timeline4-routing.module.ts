import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Timeline4Page } from './timeline4.page';

const routes: Routes = [
  {
    path: '',
    component: Timeline4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Timeline4PageRoutingModule {}
