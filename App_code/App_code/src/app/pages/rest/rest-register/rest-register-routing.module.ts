import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestRegisterPage } from './rest-register.page';

const routes: Routes = [
  {
    path: '',
    component: RestRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestRegisterPageRoutingModule {}
