import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridEx5Page } from './grid-ex5.page';

const routes: Routes = [
  {
    path: '',
    component: GridEx5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridEx5PageRoutingModule {}
