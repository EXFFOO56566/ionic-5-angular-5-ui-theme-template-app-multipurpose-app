import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterEx5Page } from './register-ex5.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterEx5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterEx5PageRoutingModule {}
