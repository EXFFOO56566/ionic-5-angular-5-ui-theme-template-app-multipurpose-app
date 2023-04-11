import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmobPage } from './admob.page';

const routes: Routes = [
  {
    path: '',
    component: AdmobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmobPageRoutingModule {}
