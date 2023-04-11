import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridHomePage } from './grid-home.page';

const routes: Routes = [
  {
    path: '',
    component: GridHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridHomePageRoutingModule {}
