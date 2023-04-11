import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentHomePage } from './payment-home.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentHomePageRoutingModule {}
