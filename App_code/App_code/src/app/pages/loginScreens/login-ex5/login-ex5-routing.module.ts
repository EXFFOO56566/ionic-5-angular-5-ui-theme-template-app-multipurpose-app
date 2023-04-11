import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEx5Page } from './login-ex5.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEx5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEx5PageRoutingModule {}
