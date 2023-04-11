import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfflineHomePage } from './offline-home.page';

const routes: Routes = [
  {
    path: '',
    component: OfflineHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfflineHomePageRoutingModule {}
