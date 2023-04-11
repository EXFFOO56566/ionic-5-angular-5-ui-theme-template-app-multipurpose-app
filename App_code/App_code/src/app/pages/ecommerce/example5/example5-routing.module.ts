import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example5Page } from './example5.page';

const routes: Routes = [
  {
    path: '',
    component: Example5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example5PageRoutingModule {}
