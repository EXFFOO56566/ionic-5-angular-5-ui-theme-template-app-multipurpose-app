import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkerPage } from './marker.page';

const routes: Routes = [
  {
    path: '',
    component: MarkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkerPageRoutingModule {}
