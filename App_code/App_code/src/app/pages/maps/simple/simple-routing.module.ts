import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimplePage } from './simple.page';

const routes: Routes = [
  {
    path: '',
    component: SimplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimplePageRoutingModule {}
