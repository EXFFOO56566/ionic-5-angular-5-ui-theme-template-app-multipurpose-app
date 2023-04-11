import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Timeline3Page } from './timeline3.page';

const routes: Routes = [
  {
    path: '',
    component: Timeline3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Timeline3PageRoutingModule {}
