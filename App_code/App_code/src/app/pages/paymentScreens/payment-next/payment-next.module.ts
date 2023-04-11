import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentNextPageRoutingModule } from './payment-next-routing.module';

import { PaymentNextPage } from './payment-next.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentNextPageRoutingModule
  ],
  declarations: [PaymentNextPage]
})
export class PaymentNextPageModule {}
