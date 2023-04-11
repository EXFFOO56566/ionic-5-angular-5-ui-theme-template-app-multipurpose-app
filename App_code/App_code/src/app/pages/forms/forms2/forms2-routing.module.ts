import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Forms2Page } from './forms2.page';

const routes: Routes = [
  {
    path: '',
    component: Forms2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Forms2PageRoutingModule {}
