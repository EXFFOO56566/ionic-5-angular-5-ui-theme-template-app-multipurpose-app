import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Forms4Page } from './forms4.page';

const routes: Routes = [
  {
    path: '',
    component: Forms4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Forms4PageRoutingModule {}
