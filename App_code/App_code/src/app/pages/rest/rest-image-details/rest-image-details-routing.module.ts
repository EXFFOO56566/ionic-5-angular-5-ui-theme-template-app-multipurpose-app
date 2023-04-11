import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestImageDetailsPage } from './rest-image-details.page';

const routes: Routes = [
  {
    path: '',
    component: RestImageDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestImageDetailsPageRoutingModule {}
