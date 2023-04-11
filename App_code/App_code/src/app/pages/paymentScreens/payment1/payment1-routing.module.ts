import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Payment1Page } from './payment1.page';

const routes: Routes = [
  {
    path: '',
    component: Payment1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Payment1PageRoutingModule {}
