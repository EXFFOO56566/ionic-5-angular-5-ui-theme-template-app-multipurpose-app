import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FireImageDetailPage } from './fire-image-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FireImageDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FireImageDetailPageRoutingModule {}
