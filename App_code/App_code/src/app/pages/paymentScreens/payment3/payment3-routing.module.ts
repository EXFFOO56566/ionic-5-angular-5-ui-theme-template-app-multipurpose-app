import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Payment3Page } from './payment3.page';

const routes: Routes = [
  {
    path: '',
    component: Payment3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Payment3PageRoutingModule {}
