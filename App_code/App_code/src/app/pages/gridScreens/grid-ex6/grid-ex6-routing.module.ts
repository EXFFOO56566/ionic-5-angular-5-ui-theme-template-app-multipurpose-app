import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridEx6Page } from './grid-ex6.page';

const routes: Routes = [
  {
    path: '',
    component: GridEx6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridEx6PageRoutingModule {}
