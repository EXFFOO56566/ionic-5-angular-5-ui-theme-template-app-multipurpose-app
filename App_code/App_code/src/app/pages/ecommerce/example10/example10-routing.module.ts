import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example10Page } from './example10.page';

const routes: Routes = [
  {
    path: '',
    component: Example10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example10PageRoutingModule {}
