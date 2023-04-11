import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example4Page } from './example4.page';

const routes: Routes = [
  {
    path: '',
    component: Example4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example4PageRoutingModule {}
