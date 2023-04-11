import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEx4Page } from './login-ex4.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEx4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEx4PageRoutingModule {}
