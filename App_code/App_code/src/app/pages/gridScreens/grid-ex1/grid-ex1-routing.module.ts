import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridEx1Page } from './grid-ex1.page';

const routes: Routes = [
  {
    path: '',
    component: GridEx1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridEx1PageRoutingModule {}
