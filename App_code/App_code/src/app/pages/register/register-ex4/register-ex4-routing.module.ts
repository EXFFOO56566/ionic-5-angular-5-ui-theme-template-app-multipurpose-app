import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterEx4Page } from './register-ex4.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterEx4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterEx4PageRoutingModule {}
