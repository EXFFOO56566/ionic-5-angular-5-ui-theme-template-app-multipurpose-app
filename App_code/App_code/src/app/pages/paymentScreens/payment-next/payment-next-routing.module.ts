import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentNextPage } from './payment-next.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentNextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentNextPageRoutingModule {}
