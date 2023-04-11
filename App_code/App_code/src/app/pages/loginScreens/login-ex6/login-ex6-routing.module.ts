import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEx6Page } from './login-ex6.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEx6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEx6PageRoutingModule {}
