import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestPage } from './rest.page';

const routes: Routes = [
  {
    path: '',
    component: RestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestPageRoutingModule {}
