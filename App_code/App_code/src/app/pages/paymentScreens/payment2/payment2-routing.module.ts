import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Payment2Page } from './payment2.page';

const routes: Routes = [
  {
    path: '',
    component: Payment2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Payment2PageRoutingModule {}
