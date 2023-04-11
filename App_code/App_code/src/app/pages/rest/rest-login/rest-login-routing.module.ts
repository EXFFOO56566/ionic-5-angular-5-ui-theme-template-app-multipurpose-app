import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestLoginPage } from './rest-login.page';

const routes: Routes = [
  {
    path: '',
    component: RestLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestLoginPageRoutingModule {}
