import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterEx2Page } from './register-ex2.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterEx2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterEx2PageRoutingModule {}
