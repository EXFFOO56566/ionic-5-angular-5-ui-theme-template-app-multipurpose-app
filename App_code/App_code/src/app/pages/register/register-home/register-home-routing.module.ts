import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterHomePage } from './register-home.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterHomePageRoutingModule {}
