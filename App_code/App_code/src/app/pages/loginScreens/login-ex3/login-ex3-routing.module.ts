import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEx3Page } from './login-ex3.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEx3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEx3PageRoutingModule {}
