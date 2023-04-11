import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistanceMatrixPage } from './distance-matrix.page';

const routes: Routes = [
  {
    path: '',
    component: DistanceMatrixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistanceMatrixPageRoutingModule {}
