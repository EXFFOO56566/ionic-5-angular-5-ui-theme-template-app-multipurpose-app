import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Forms3Page } from './forms3.page';

const routes: Routes = [
  {
    path: '',
    component: Forms3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Forms3PageRoutingModule {}
