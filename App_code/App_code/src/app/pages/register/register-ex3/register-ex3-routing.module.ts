import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterEx3Page } from './register-ex3.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterEx3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterEx3PageRoutingModule {}
