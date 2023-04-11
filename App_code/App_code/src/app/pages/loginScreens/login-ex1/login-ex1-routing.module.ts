import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEx1Page } from './login-ex1.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEx1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEx1PageRoutingModule {}
