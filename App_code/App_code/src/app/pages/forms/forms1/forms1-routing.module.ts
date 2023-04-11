import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Forms1Page } from './forms1.page';

const routes: Routes = [
  {
    path: '',
    component: Forms1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Forms1PageRoutingModule {}
