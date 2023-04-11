import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FireImageListPage } from './fire-image-list.page';

const routes: Routes = [
  {
    path: '',
    component: FireImageListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FireImageListPageRoutingModule {}
