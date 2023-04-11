import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterEx6Page } from './register-ex6.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterEx6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterEx6PageRoutingModule {}
