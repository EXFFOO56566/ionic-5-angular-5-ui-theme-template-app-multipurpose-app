import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfflineDetailsPage } from './offline-details.page';

const routes: Routes = [
  {
    path: '',
    component: OfflineDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfflineDetailsPageRoutingModule {}
