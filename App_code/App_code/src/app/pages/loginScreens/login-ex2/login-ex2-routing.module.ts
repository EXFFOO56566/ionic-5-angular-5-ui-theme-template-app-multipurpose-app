import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEx2Page } from './login-ex2.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEx2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEx2PageRoutingModule {}
