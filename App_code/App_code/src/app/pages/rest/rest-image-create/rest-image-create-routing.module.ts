import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestImageCreatePage } from './rest-image-create.page';

const routes: Routes = [
  {
    path: '',
    component: RestImageCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestImageCreatePageRoutingModule {}
