import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignaturePickerPage } from './signature-picker.page';

const routes: Routes = [
  {
    path: '',
    component: SignaturePickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignaturePickerPageRoutingModule {}
