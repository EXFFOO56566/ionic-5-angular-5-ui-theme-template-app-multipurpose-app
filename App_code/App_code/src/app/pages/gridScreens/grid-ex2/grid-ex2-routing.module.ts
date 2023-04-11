import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridEx2Page } from './grid-ex2.page';

const routes: Routes = [
  {
    path: '',
    component: GridEx2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridEx2PageRoutingModule {}
