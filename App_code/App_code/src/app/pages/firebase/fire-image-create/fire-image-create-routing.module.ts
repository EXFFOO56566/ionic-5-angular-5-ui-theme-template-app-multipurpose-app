import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FireImageCreatePage } from './fire-image-create.page';

const routes: Routes = [
  {
    path: '',
    component: FireImageCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FireImageCreatePageRoutingModule {}
