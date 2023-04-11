import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridModelPage } from './grid-model.page';

const routes: Routes = [
  {
    path: '',
    component: GridModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridModelPageRoutingModule {}
