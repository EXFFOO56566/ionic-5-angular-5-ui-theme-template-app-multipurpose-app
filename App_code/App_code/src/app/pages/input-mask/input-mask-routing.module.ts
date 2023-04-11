import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputMaskPage } from './input-mask.page';

const routes: Routes = [
  {
    path: '',
    component: InputMaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputMaskPageRoutingModule {}
