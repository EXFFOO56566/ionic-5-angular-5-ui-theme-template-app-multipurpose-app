import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginHomePage } from './login-home.page';

const routes: Routes = [
  {
    path: '',
    component: LoginHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginHomePageRoutingModule {}
