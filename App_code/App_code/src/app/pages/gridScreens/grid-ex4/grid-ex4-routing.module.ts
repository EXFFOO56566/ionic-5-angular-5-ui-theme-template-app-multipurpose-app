import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridEx4Page } from './grid-ex4.page';

const routes: Routes = [
  {
    path: '',
    component: GridEx4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridEx4PageRoutingModule {}
