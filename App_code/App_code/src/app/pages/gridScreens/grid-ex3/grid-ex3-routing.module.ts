import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridEx3Page } from './grid-ex3.page';

const routes: Routes = [
  {
    path: '',
    component: GridEx3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridEx3PageRoutingModule {}
