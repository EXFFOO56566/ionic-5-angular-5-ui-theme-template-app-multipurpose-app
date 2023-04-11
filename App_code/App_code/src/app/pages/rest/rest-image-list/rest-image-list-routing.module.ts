import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestImageListPage } from './rest-image-list.page';

const routes: Routes = [
  {
    path: '',
    component: RestImageListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestImageListPageRoutingModule {}
