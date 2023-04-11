import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterEx1Page } from './register-ex1.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterEx1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterEx1PageRoutingModule {}
