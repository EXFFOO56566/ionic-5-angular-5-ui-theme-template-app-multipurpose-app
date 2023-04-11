import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example3Page } from './example3.page';

const routes: Routes = [
  {
    path: '',
    component: Example3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example3PageRoutingModule {}
