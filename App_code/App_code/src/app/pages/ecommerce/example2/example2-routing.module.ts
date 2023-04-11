import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example2Page } from './example2.page';

const routes: Routes = [
  {
    path: '',
    component: Example2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example2PageRoutingModule {}
