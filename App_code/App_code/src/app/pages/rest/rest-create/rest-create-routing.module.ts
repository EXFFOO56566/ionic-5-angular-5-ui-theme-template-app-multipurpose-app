import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestCreatePage } from './rest-create.page';

const routes: Routes = [
  {
    path: '',
    component: RestCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestCreatePageRoutingModule {}
