import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example1Page } from './example1.page';

const routes: Routes = [
  {
    path: '',
    component: Example1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example1PageRoutingModule {}
